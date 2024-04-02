export interface IWeatherDTO {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherListItemDTO {
  coord: {lon: number; lat: number};
  sys: {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  weather: IWeatherDTO[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {speed: number; deg: number};
  clouds: {all: number};
  dt: number;
  id: number;
  name: string;
}

export interface IWeatherListResponseDTO {
  cnt: number;
  list: IWeatherListItemDTO[];
}
