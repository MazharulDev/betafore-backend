import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post("/add", ProductController.createProduct);
router.get("/", ProductController.getProduct);

export const ProductRoutes = router;
