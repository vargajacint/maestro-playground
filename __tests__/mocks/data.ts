/* Types */
import type { IWeatherListResponseDTO } from '../../src/typings/DTOs';

export const mockedWeatherList: IWeatherListResponseDTO = {
  cnt: 1,
  list: [
    {
      coord: {
        lon: 30.5167,
        lat: 50.4333,
      },
      sys: {
        country: 'UA',
        timezone: 10800,
        sunrise: 1693970354,
        sunset: 1694018048,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 297.99,
        feels_like: 297.84,
        temp_min: 296.27,
        temp_max: 297.99,
        pressure: 1022,
        humidity: 50,
      },
      visibility: 10000,
      wind: {
        speed: 0.89,
        deg: 198,
      },
      clouds: {
        all: 94,
      },
      dt: 1693991349,
      id: 703448,
      name: 'Kyiv',
    },
  ],
};
