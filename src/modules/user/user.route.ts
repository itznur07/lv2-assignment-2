import express, { Router } from 'express';
import { userController } from './user.controller';
const router: Router = express.Router();

router.post('/users', userController.createUser);

export const userRouter = router;
