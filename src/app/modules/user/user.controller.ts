import { Request, Response } from 'express';
import { User } from './user.interface';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUserToDB(req.body);

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

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserToDB();

    res.status(200).json({
      success: true,
      message: 'get all user successfully!',
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

const getOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getOneUserToDB(userId);

    res.status(200).json({
      success: true,
      message: 'user get successfully!',
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

const updateOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userData: User = req.body;

    const result = await userServices.updateOneUserToDB(userId, userData);

    res.status(200).json({
      success: true,
      message: 'user updated  successfully!',
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

const deleteOneUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.deleteOneUserToDB(userId);

    res.status(200).json({
      success: true,
      message: 'user deleted successfully!',
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
  getAllUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};
