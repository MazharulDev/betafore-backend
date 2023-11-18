import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProductService } from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import { IProduct } from "./product.interface";
import httpStatus from "http-status";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  const result = await ProductService.createProduct(productData);
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});
const getProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getProduct();
  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrived successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getProduct,
};
