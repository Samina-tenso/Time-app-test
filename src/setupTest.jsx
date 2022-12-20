import '@testing-library/jest-dom';
import { server } from './mocks/server'
import { beforeAll, afterAll } from 'vitest'
import { afterEach } from 'vitest'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
