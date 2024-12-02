import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useChatbox } from "../contexts/ChatboxContext";

export default function Chatbot() {
  return <Outlet />;
}
