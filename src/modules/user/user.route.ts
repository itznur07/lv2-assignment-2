import express, { Router } from 'express';
import { userController } from './user.controller';
const router: Router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUser);
router.get('/users/:userId', userController.getOneUser);
router.put('/users/:userId', userController.updateOneUser);

export const userRouter = router;
