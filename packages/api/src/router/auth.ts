import type { RouteOptions } from 'fastify';

export const authRoutes: RouteOptions[] = [
  {
    url: '/login',
    method: 'GET',
    handler: (req) => {
      return { token: '123' };
    }
  }
];;