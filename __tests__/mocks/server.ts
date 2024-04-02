import { SUCCESS_HANDLERS } from './handlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...SUCCESS_HANDLERS);
