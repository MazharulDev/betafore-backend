import config from "../config";

export const stripe = require("stripe")(config.stripe.stripe_secret_key);
