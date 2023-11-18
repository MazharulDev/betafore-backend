import { Schema, model } from "mongoose";
import { IPayment } from "./payment.interface";

export const PaymentSchema = new Schema<IPayment>(
  {
    name: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    transId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Payment = model<IPayment>("payment", PaymentSchema);
