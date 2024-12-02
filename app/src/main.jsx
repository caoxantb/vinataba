import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./layout";
import Newsletter from "./pages/Newsletter";
import Chatbot from "./pages/Chatbot";
import Analytics from "./pages/Analytics";
import ChatboxDetail from "./components/Chatbox/ChatboxDetail";
import { ChatboxProvider } from "./contexts/ChatboxContext";
import NewChat from "./components/Chatbox/NewChat";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          {
            path: "newsletter",
            Component: Newsletter,
          },
          {
            path: "chatbot",
            Component: Chatbot,
            children: [
              {
                path: "new-chat",
                Component: NewChat,
              },
              {
                path: ":id",
                Component: ChatboxDetail,
              },
            ],
          },
          {
            path: "analytics",
            Component: Analytics,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatboxProvider>
      <RouterProvider router={router} />
    </ChatboxProvider>
  </React.StrictMode>
);
