import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post("/add", ProductController.createProduct);
router.get("/", ProductController.getProduct);
router.get("/:id", ProductController.getProductById);

export const ProductRoutes = router;
