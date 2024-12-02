import express from "express";

import {
  getAllChat,
  getChatByID,
  saveChat,
} from "../controllers/chatController.js";

const chatRouter = express.Router();

chatRouter.route("/").get(getAllChat).post(saveChat);
chatRouter.route("/:chatID").get(getChatByID);

export default chatRouter;
