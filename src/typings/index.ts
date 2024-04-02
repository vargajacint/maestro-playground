export interface IAPIRejection {
  message: string;
  code: number;
}

export interface IAPIRequest<Body> {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  body?: Body;
}

export interface IWeatherListItem {
  id: number;
  coord: { lon: number; lat: number };
  name: string;
  temperature: number;
  description: string;
  icon: string;
}

export interface IWeather {
  id: number;
  coord: { lon: number; lat: number };
  name: string;
  temperature: {
    current: number;
    min: number;
    max: number;
    feels: number;
  };
  wind: { speed: number; deg: number };
  humidity: number;
  pressure: number;
  country: string;
  icon: string;
}
