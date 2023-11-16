import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/registration", UserController.Registration);

export const UserRoutes = router;
