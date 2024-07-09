import { setupServer} from 'msw/node';
import {handlers} from './mocks/handlers';
import { server } from './mocks/server';
const server = setupServer(...handlers);

beforeAll(()=>server.listen());

afterEach(()=>server.resetHandlers());

beforeAll(()=>server.close())