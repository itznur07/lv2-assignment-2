import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TUser } from './user.interface';
import { userServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserToDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users fetched successfully!',
    data: result,
  });
});

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
    const userData: TUser = req.body;

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
