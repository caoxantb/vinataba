import { Chat } from "../models/index.js";

export const getAllChat = async (req, res) => {
  const chats = await Chat.find().populate("messages");
  res.status(200).json(chats);
};

export const getChatByID = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id).populate("messages");
    if (!chat) {
      return res.status(404).json({ error: "Chat not found" });
    }
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chat" });
  }
};

export const saveChat = async (req, res) => {
  try {
    const newChat = new Chat(req.body);
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (error) {
    res.status(500).json({ error: "Failed to save chat" });
  }
};
