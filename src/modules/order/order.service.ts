import { User } from '../user/user.interface';
import { UserModel } from '../user/user.model';

const addOrderToDB = async (userId: number, updateData: User) => {
  if (updateData.orders.length >= 0) {
    const result = await UserModel.updateOne(
      { userId: userId },
      {
        $set: {
          orders: updateData,
        },
      },
    );
    return result;
  } else {
    const result = await UserModel.updateOne(
      { userId: userId },
      {
        $set: {
          orders: [updateData],
        },
      },
    );
    return result;
  }
};

export const orderServices = {
  addOrderToDB,
};
