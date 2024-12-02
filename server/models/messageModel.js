import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sendBy: {
    type: String,
    enum: ["user", "llm"],
    default: "user",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
