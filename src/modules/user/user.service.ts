import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserToDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserToDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getOneUserToDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId: userId });
  return result;
};

const updateOneUserToDB = async (userId: number, userData: User) => {
  const result = await UserModel.updateOne(
    { userId: userId },
    { $set: userData },
  );

  return result;
};

const deleteOneUserToDB = async (userId: number) => {
  const result = await UserModel.deleteOne({ userId: userId });
  return result;
};

export const userServices = {
  createUserToDB,
  getAllUserToDB,
  getOneUserToDB,
  updateOneUserToDB,
  deleteOneUserToDB,
};
