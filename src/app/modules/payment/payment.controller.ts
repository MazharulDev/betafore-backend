import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PaymentService } from "./payment.service";
import { IPayment } from "./payment.interface";

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

const postPayment = catchAsync(async (req: Request, res: Response) => {
  const { ...paymentData } = req.body;
  const result = await PaymentService.postPayment(paymentData);
  sendResponse<IPayment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "payment added successfully",
    data: result,
  });
});

const getPaymentById = catchAsync(async (req: Request, res: Response) => {
  const { transId } = req.params;
  const result = await PaymentService.getPaymentById(transId);
  sendResponse<IPayment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "payment retrived successfully",
    data: result,
  });
});

export const PaymentController = {
  paymentInit,
  postPayment,
  getPaymentById,
};
