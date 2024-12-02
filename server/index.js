import http from "http";
import app from "./app.js";
// import { main as openAIMain } from "./openai_api.js";
import dotenv from "dotenv";
import { connectDatabase } from "./db/connection.js";

dotenv.config();

const initServer = async () => {
  const server = http.createServer(app);
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  await connectDatabase();
  // await openAIMain();
};

initServer();
