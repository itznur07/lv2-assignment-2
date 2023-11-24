import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserToDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const userServices = {
  createUserToDB,
};
