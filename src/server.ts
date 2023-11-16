import express, { Request, Response } from "express";

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Home route is running");
});

app.listen(port, () => {
  console.log(` Server is running at ${port}`);
});
