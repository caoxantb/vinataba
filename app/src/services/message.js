import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/message";

export const createMessage = async (text) => {
  const res = await axios.post(BASE_URL, { text });
  return res.data;
};
