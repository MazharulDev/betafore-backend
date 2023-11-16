import express from "express";
import { UserRoutes } from "../modules/user/user.route";
const router = express.Router();

const modulesRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
