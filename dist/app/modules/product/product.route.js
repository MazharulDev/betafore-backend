"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/add", product_controller_1.ProductController.createProduct);
router.get("/", product_controller_1.ProductController.getProduct);
router.get("/:id", product_controller_1.ProductController.getProductById);
exports.ProductRoutes = router;
