import express, { Router } from 'express';
import { userController } from './user.controller';
const router: Router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUser);
router.get('/:userId', userController.getOneUser);
router.put('/:userId', userController.updateOneUser);
router.delete('/:userId', userController.deleteOneUser);

export const userRouter = router;
