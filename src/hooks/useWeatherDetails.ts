import { useState } from 'react';

/* Types */
import type { IAPIRejection, IWeather } from '../typings';
import type { IWeatherListItemDTO } from '../typings/DTOs';

/* Data Things */
import useSWR from 'swr';

const transformIWeatherListItemDTO = (p: IWeatherListItemDTO): IWeather => {
  return {
    id: p.id,
    coord: p.coord,
    name: p.name,
    temperature: {
      current: p.main.temp,
      feels: p.main.feels_like,
      max: p.main.temp_max,
      min: p.main.temp_min,
    },
    pressure: p.main.pressure,
    humidity: p.main.humidity,
    wind: p.wind,
    country: p.sys.country,
    icon: `https://openweathermap.org/img/wn/${p.weather?.[0]?.icon ?? ''}@4x.png`,
  };
};

export const useWeatherDetails = (lat: number, lon: number) => {
  /* States */
  const [weather, setWeather] = useState<IWeather | null>(null);

  /* Hooks */
  const { error, isLoading } = useSWR<IWeatherListItemDTO, IAPIRejection>(
    `weather?lat=${lat}&lon=${lon}&units=metric`,
    {
      onSuccess(data) {
        setWeather(transformIWeatherListItemDTO(data));
      },
    },
  );

  return {
    weather,
    isLoading,
    error,
  };
};
