import { Request, Response } from 'express';
import { User } from './user.interface';
import { userServices } from './user.service';
import { userSchemaValidation } from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;

    // validate user
    const validateUser = userSchemaValidation.parse(user);

    const result = await userServices.createUserToDB(validateUser);

    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      error: error || error.message,
    });
  }
};

export const userController = {
  createUser,
};
