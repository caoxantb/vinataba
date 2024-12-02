import extractArguments from "../middlewares/extractArgument.js";
import extractQuestion from "../middlewares/extractQuestion.js";
import sendAnswer from "../middlewares/sendAnswer.js";
import sendPredictiveModel from "../middlewares/sendPredictiveModel.js";
import { Message } from "../models/index.js";

export const createMessage = async (req, res, next) => {
  const { text } = req.body;

  const newMessage = new Message({
    text,
    sendBy: "user",
  });
  await Message.create(newMessage);

  await extractQuestion(req, res, next);
  await extractArguments(req, res, next);
  await sendPredictiveModel(req, res, next);
  await sendAnswer(req, res, next);

  const llmMessage = new Message({
    text: req.answer,
    sendBy: "llm",
  });
  await Message.create(llmMessage);

  res.status(201).json(llmMessage);
};
