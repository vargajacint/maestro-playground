import { useState } from 'react';

/* Types */
import type { IWeatherListItemDTO, IWeatherListResponseDTO } from '../typings/DTOs';
import type { IAPIRejection, IWeatherListItem } from '../typings';

/* Data Things */
import useSWR from 'swr';
import { CITIES } from '../constants';

const transformIWeatherListItemDTO = (p: IWeatherListItemDTO): IWeatherListItem => {
  return {
    id: p.id,
    coord: p.coord,
    name: p.name,
    temperature: p.main.temp,
    description: p.weather?.[0]?.description ?? '',
    icon: `https://openweathermap.org/img/wn/${p.weather?.[0]?.icon ?? ''}@4x.png`,
  };
};

export const useWeatherList = () => {
  /* States */
  const [list, setList] = useState<IWeatherListItem[] | null>(null);

  /* Hooks */
  const { error, isLoading } = useSWR<IWeatherListResponseDTO, IAPIRejection>(
    `group?id=${CITIES.map(x => x.id).join(',')}&units=metric`,
    {
      onSuccess(data) {
        setList(data.list.map(x => transformIWeatherListItemDTO(x)));
      },
    },
  );

  return {
    isLoading,
    list,
    error,
  };
};
