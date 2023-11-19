"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const config_1 = __importDefault(require("../config"));
exports.stripe = require("stripe")(config_1.default.stripe.stripe_secret_key);
