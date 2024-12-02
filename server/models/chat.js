import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  chats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
