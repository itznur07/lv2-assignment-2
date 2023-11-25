import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { orderRouter } from './modules/order/order.route';
import { userRouter } from './modules/user/user.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/users', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
