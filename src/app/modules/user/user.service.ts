import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserToDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserToDB = async () => {
  const result = await UserModel.find().select(
    '-hobbies -isActive -password -userId -_id',
  );
  return result;
};

const getOneUserToDB = async (userId: string | number) => {
  const result = await UserModel.findOne({ userId: userId });
  return result;
};

const updateOneUserToDB = async (userId: string | number, userData: TUser) => {
  const result = await UserModel.findOneAndUpdate(
    {
      userId: userId,
    },
    userData,
    { new: true },
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
