import classNames from "classnames";
import Link from "next/link";
import { CloudSun, Sunset, Thermometer, Waves, Wind } from "lucide-react";

import { getBeachConditions } from "@/_lib/utils/beach-conditions";

interface Props {
  cssClasses?: string;
}

const BLACK = "#2D2C33";
const COORDINATES = { latitude: -34.0527, longitude: 23.3716 };

const BeachConditionsComponent = async ({ cssClasses }: Props) => {
  const conditions = await getBeachConditions(COORDINATES);

  if (!conditions) return null;

  const { airTemp, seaTemp, windSpeed, windDirection, sunset } = conditions;

  const stats = [
    {
      label: "Air",
      value: `${airTemp}°C`,
      icon: <Thermometer color={BLACK} size={16} />,
    },
    ...(seaTemp === null
      ? []
      : [
          {
            label: "Sea",
            value: `${seaTemp}°C`,
            icon: <Waves color={BLACK} size={16} />,
          },
        ]),
    {
      label: "Wind",
      value: `${windSpeed} km/h ${windDirection}`,
      icon: <Wind color={BLACK} size={16} />,
    },
    {
      label: "Sunset",
      value: sunset,
      icon: <Sunset color={BLACK} size={16} />,
    },
    {
      label: "Conditions",
      value: conditions.conditions,
      icon: <CloudSun color={BLACK} size={16} />,
    },
  ];

  return (
    <article
      className={classNames(
        "flex flex-wrap gap-5 py-7 items-center justify-between desktop:bg-white/85 desktop:px-7 desktop:py-3",
        cssClasses,
      )}
    >
      <div className="flex border-b border-dark-blue/75 pb-[6px] self-start min-[925px]:border-b-0 min-[925px]:pb-0 min-[925px]:self-auto">
        <h2 className="text-black text-[16px] font-semibold tracking-[1.6px] desktop:whitespace-nowrap desktop:flex flex-col desktop:text-[14px]">
          Today&rsquo;s{" "}
          <span className="text-black text-[16px] font-semibold tracking-[1.6px] desktop:whitespace-nowrap desktop:text-[14px]">
            Bay Conditions
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-1.5 desktop:gap-1">
        <div className="flex flex-wrap gap-x-5 gap-y-[6px] w-full desktop:flex-row">
          {stats.map(({ label, value, icon }) => (
            <div key={label} className="flex gap-[6px] items-center">
              {icon}
              <p className="text-black text-[12px] whitespace-nowrap">
                {label}
              </p>
              <p className="text-black text-[12px] font-semibold whitespace-nowrap">
                {value}
              </p>
            </div>
          ))}
        </div>
        <p className="italic text-[10px]">
          Powered by{" "}
          <Link href="https://www.weatherapi.com/" target="_blank">
            WeatherAPI.com
          </Link>
          {seaTemp !== null && (
            <>
              {" "}
              and{" "}
              <Link href="https://coastwatch.noaa.gov/" target="_blank">
                NOAA CoastWatch
              </Link>
            </>
          )}
        </p>
      </div>
    </article>
  );
};

export default BeachConditionsComponent;
