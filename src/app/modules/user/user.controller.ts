import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { IUser } from "./user.interface";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const Registration = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await UserService.registration(userData);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users Registration successfully",
    data: result,
  });
});

const getUserByEmail = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;
  const result = await UserService.getUserByEmail(email);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Registration successfully",
    data: result,
  });
});

export const UserController = {
  Registration,
  getUserByEmail,
};
