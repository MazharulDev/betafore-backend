import { stripe } from "../../../constants/stripe";
import { IPayment } from "./payment.interface";
import { Payment } from "./payment.model";

const paymentInit = async (price: number) => {
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  return paymentIntent.client_secret;
};

const postPayment = async (payload: IPayment) => {
  const result = await Payment.create(payload);
  return result;
};
const getPaymentById = async (payload: string) => {
  const result = await Payment.findOne({ transId: payload });
  return result;
};

export const PaymentService = {
  paymentInit,
  postPayment,
  getPaymentById,
};
