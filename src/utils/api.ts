/* Types */
import type { IAPIRejection, IAPIRequest } from '../typings';

/* Data Things */
import { API_BASE, API_KEY } from '@env';

const getErrorMessage = (statusCode: number) => {
  switch (statusCode) {
    case 401:
      return 'Something went wrong, please try again later!';

    case 403:
      return 'Something went wrong, you do not have permission to perform this action!';

    default:
      return 'Something went wrong, please try again later!';
  }
};

export const api = async <T, Body>({ method, path, body }: IAPIRequest<Body>): Promise<T & IAPIRejection> => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  try {
    const response = await fetch(`${API_BASE}/${path}&appid=${API_KEY}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    console.log(response.status, `${API_BASE}/${path}`, body ? JSON.stringify(body) : undefined);

    if (response.status < 400 && response.ok) {
      const parsed = await response.json();

      return { ...parsed, code: response.status };
    } else {
      const parsed = JSON.parse(await response.text());
      throw {
        message: parsed?.message ?? getErrorMessage(response.status),
        code: response.status,
      };
    }
  } catch (error) {
    throw error;
  }
};
