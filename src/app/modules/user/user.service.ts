import { IUser } from "./user.interface";
import { User } from "./user.model";

const registration = async (user: IUser): Promise<IUser | null> => {
  const result = await User.create(user);
  return result;
};

export const UserService = {
  registration,
};
