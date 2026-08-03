import { BeachConditions, Coordinates } from "@/_types/general-types";

const REVALIDATE_SECONDS = 900;
const SEA_REVALIDATE_SECONDS = 21600;
const REQUEST_TIMEOUT_MS = 5000;

const NOAA_DATASET =
  "https://coastwatch.noaa.gov/erddap/griddap/noaacwBLENDEDsstDNDaily.json";

interface WeatherApiResponse {
  current: {
    temp_c: number;
    wind_kph: number;
    wind_dir: string;
    condition: { text: string };
  };
  forecast: {
    forecastday: {
      astro: { sunset: string };
    }[];
  };
}

interface NoaaResponse {
  table: {
    columnNames: string[];
    rows: (string | number | null)[][];
  };
}

const to24Hour = (time: string) => {
  const [clock, meridiem] = time.trim().split(" ");
  const [rawHours, minutes] = clock.split(":");

  let hours = Number(rawHours);

  if (meridiem?.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (meridiem?.toUpperCase() === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${minutes}`;
};

const getSeaTemp = async ({ latitude, longitude }: Coordinates) => {
  const query = `?analysed_sst[(last)][(${latitude})][(${longitude})]`;

  const response = await fetch(`${NOAA_DATASET}${encodeURI(query)}`, {
    headers: { "User-Agent": "BaySauna/1.0 (+https://baysauna.co.za)" },
    next: { revalidate: SEA_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`NOAA responded ${response.status}`);
  }

  const { table }: NoaaResponse = await response.json();
  const value = table.rows[0]?.[table.columnNames.indexOf("analysed_sst")];

  if (typeof value !== "number") {
    throw new Error("NOAA returned no sea surface temperature");
  }

  return Math.round(value);
};

const getWeather = async ({ latitude, longitude }: Coordinates, key: string) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`;

  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`WeatherAPI responded ${response.status}`);
  }

  return response.json() as Promise<WeatherApiResponse>;
};

export const getBeachConditions = async (
  coordinates: Coordinates,
): Promise<BeachConditions | null> => {
  const key = process.env.WEATHERAPI_KEY;

  if (!key) {
    console.error("Beach conditions skipped: WEATHERAPI_KEY is not set");
    return null;
  }

  const [weatherResult, seaResult] = await Promise.allSettled([
    getWeather(coordinates, key),
    getSeaTemp(coordinates),
  ]);

  if (weatherResult.status === "rejected") {
    console.error("Beach conditions fetch failed", weatherResult.reason);
    return null;
  }

  if (seaResult.status === "rejected") {
    console.error("Sea temperature fetch failed", seaResult.reason);
  }

  try {
    const { current, forecast } = weatherResult.value;

    return {
      airTemp: Math.round(current.temp_c),
      seaTemp: seaResult.status === "fulfilled" ? seaResult.value : null,
      windSpeed: Math.round(current.wind_kph),
      windDirection: current.wind_dir,
      conditions: current.condition.text,
      sunset: to24Hour(forecast.forecastday[0].astro.sunset),
    };
  } catch (error) {
    console.error("Beach conditions parsing failed", error);
    return null;
  }
};
