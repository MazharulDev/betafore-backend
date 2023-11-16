import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { ILoginUser, ILoginUserResponse } from "./auth.interface";
import { Secret } from "jsonwebtoken";
import config from "../../../config";

import { User } from "../user/user.model";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const isUserExist = await User.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }

  //create access token

  const { email: userId } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  loginUser,
};
