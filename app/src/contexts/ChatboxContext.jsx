import React, { createContext, useContext, useState } from "react";

// Create the context
const ChatboxContext = createContext();

// Provider component
export function ChatboxProvider({ children }) {
  const [chatboxes, setChatboxes] = useState([]);

  // Function to add a new chatbox
  const addChatbox = (id) => {
    setChatboxes((prev) => [id, ...prev]);
  };

  return (
    <ChatboxContext.Provider value={{ chatboxes, addChatbox }}>
      {children}
    </ChatboxContext.Provider>
  );
}

// Hook to use the context
export function useChatbox() {
  return useContext(ChatboxContext);
}
