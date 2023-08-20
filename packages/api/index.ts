import type { RouteOptions } from 'fastify';
import Fastify from 'fastify';
import cors from '@fastify/cors';
const fastify = Fastify({
  logger: true,
});
import { authRoutes } from './src/root';

export const server = { 
  // Run the server!
  start: async (routes: RouteOptions[]) => {
    await fastify.register(cors, { 
      origin: '*',
    });

    try {
      for (const route of [...authRoutes, ...routes]) {
        fastify.route(route);
      }
      await fastify.listen({ port: 3000 });

      console.log('Server started: ', 3000);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
};
