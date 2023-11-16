import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export type UserModel = {
  isUserExist(email: string): Promise<Pick<IUser, "email" | "password">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
