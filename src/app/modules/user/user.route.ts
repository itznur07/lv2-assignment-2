import express, { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { userController } from './user.controller';
import { validateUserSchema } from './user.validation';
const router: Router = express.Router();

router.post(
  '/users',
  validateRequest(validateUserSchema.createUserSchemaValidation),
  userController.createUser,
);

router.get('/users', userController.getAllUser);

router.get('/:userId', userController.getOneUser);
router.put(
  '/:userId',
  validateRequest(validateUserSchema.updateUserSchemaValidation),
  userController.updateOneUser,
);
router.delete('/:userId', userController.deleteOneUser);

export const userRouter = router;
