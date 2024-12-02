import express from "express";

import { createMessage } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.route("/").post(createMessage);

export default messageRouter;
