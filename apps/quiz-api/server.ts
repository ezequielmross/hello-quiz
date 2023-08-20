import { server } from '@packages/api';
import { apis } from './routes/quiz';

server.start(apis);