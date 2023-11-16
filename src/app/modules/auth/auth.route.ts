import express from "express";

import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validationRequest";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
