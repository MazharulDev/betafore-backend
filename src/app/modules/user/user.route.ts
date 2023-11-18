import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/registration", UserController.Registration);
router.get("/:email", UserController.getUserByEmail);

export const UserRoutes = router;
