"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.PaymentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PaymentSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Payment = (0, mongoose_1.model)("payment", exports.PaymentSchema);
