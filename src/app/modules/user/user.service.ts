import { User } from "./user.model";
import { IUser } from "./user.type";

const createUser = async (user: IUser): Promise<IUser> => {
    const newUser = await User.create(user);
    return newUser;
  };

export const UserService = {
  createUser
}