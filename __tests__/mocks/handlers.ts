/* Types */
import type { IWeatherListItemDTO, IWeatherListResponseDTO } from '../../src/typings/DTOs';
import type { IAPIRejection } from '../../src/typings';

/* Data Things */
import { mockedWeatherList } from './data';
import { API_BASE } from '@env';
import { rest } from 'msw';

export const ERROR_HANDLER = rest.get<any, any, IAPIRejection>('*', (_, res, ctx) => {
  return res(
    ctx.status(500),
    ctx.json({
      code: 500,
      message: 'Something went wrong, please try again later!',
    }),
  );
});

export const SUCCESS_HANDLERS = [
  rest.get<IWeatherListResponseDTO>(`${API_BASE}/group`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedWeatherList));
  }),

  rest.get<IWeatherListItemDTO>(`${API_BASE}/weather`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedWeatherList.list[0]));
  }),
];
