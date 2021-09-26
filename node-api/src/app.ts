import { Request, Response } from "express";
const apiRouter = require("./routes");

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(`req: ${req}`);
});

app.use("/api", apiRouter);

module.exports = app;
