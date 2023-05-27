export type IWeatherType = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourly;
};
export type ICurrentWeather = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
};
export type IHourlyUnits = {
  time: string;
  precipitation: string;
  cloudcover: string;
};
export type IHourly = {
  time: string[];
  precipitation: number[];
  cloudcover: number[];
};
