import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

// import routers from "./app/routes";
import httpStatus from "http-status";
const app: Application = express();
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
// import routers from "./app/routes";

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//aplication main route
// app.use("/api/v1/", routers);

// tesing route
app.get("/", (req: Request, res: Response) => {
  res.send("Home route is Working...");
});

//global error handler
app.use(globalErrorHandler);

// Not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

export default app;
