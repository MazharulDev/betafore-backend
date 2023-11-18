import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PaymentService } from "./payment.service";

const paymentInit = catchAsync(async (req: Request, res: Response) => {
  const { ...paymentData } = req.body;
  const result = await PaymentService.paymentInit(paymentData?.price);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "payment init successfully",
    data: result,
  });
});

export const PaymentController = {
  paymentInit,
};
