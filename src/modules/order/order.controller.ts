import { Request, Response } from 'express';
import { User } from '../user/user.interface';
import { orderServices } from './order.service';

const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updateData: User = req.body;

    const result = await orderServices.addOrderToDB(userId, updateData);

    res.status(200).json({
      success: true,
      message: 'order added success',
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

export const orderControllers = {
  addOrder,
};
