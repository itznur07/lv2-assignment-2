/** Import start here 🏃‍♂️ */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

/** parser 📦 */
app.use(express.json());
app.use(cors());

/** application routers ends here ⏱️ */

/** APIs start here 🏃‍♂️ */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});
/** APIs ends here ⏱️ */

/** Exporter */
export default app;
