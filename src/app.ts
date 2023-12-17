import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { userRouter } from './app/modules/user/user.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// add global error handler
app.use(globalErrorHandler);

export default app;
