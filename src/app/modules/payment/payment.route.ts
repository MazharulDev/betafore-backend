import express from "express";
import { PaymentController } from "./payment.controller";
const router = express.Router();

router.post("/create-payment-intent", PaymentController.paymentInit);

export const PaymentRoutes = router;
