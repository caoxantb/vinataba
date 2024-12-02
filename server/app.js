import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { chatRouter, messageRouter } from "./routers/index.js";

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

// routes
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);

export default app;
