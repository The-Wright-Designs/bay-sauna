export interface ShowEmailAddressProps {
  buttonClasses?: string;
  linkClasses?: string;
  blackText?: boolean;
}

export interface ShowPhoneNumberProps {
  buttonClasses?: string;
  linkClasses?: string;
  blackText?: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface BeachConditions {
  airTemp: number;
  seaTemp: number | null;
  windSpeed: number;
  windDirection: string;
  conditions: string;
  sunset: string;
}
