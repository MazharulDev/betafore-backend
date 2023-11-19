"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const stripe_1 = require("../../../constants/stripe");
const payment_model_1 = require("./payment.model");
const paymentInit = (price) => __awaiter(void 0, void 0, void 0, function* () {
    const amount = price * 100;
    const paymentIntent = yield stripe_1.stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
    });
    return paymentIntent.client_secret;
});
const postPayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payment.create(payload);
    return result;
});
const getPaymentById = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.Payment.findOne({ transId: payload });
    return result;
});
exports.PaymentService = {
    paymentInit,
    postPayment,
    getPaymentById,
};
