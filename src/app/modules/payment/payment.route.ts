import express from "express";
import { PaymentController } from "./payment.controller";
const router = express.Router();

router.post("/create-payment-intent", PaymentController.paymentInit);
router.post("/", PaymentController.postPayment);
router.get("/:transId", PaymentController.getPaymentById);

export const PaymentRoutes = router;
