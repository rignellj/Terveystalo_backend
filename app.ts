import express from 'express';
import cors from 'cors';

import middleware from './utils/middleware';
import sumRouter from './routes/sum';
import checkPrimeRouter from './routes/checkPrime';

const app = express();

app.use(express.json());
app.use(cors({
	methods: [ 'GET' ]
}));

app.use('/api/sum', sumRouter);
app.use('/api/checkprime', checkPrimeRouter);

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

export default app;
