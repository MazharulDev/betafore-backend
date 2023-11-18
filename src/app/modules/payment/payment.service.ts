import { stripe } from "../../../constants/stripe";

const paymentInit = async (price: number) => {
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  return paymentIntent.client_secret;
};

export const PaymentService = {
  paymentInit,
};
