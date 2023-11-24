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

const getOneUserToDB = async (userId: string) => {
  const result = await UserModel.findOne({ id: userId });
  return result;
};

export const userServices = {
  createUserToDB,
  getAllUserToDB,
  getOneUserToDB,
};
