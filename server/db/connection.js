import mongoose from "mongoose";
export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};
export const disconnectDatabase = async () => {
  await mongoose.disconnect();
};