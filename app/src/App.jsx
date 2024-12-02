import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import ChatIcon from "@mui/icons-material/Chat";
import { useChatbox } from "./contexts/ChatboxContext";

export default function App() {
  const { chatboxes } = useChatbox();

  const CHATBOX_NAVIGATION = chatboxes.map((id) => ({
    segment: `${id}`,
    title: `Chatbox ${id}`,
    icon: <ChatIcon />,
  }));

  const NAVIGATION = [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "newsletter",
      title: "Newsletter",
      icon: <DashboardIcon />,
    },
    {
      segment: "chatbot",
      title: "AI Chatbot",
      icon: <ChatIcon />,
      children: [
        {
          segment: "new-chat",
          title: "New Chat",
          icon: <DescriptionIcon />,
        },
        ...CHATBOX_NAVIGATION,
      ],
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Analytics",
    },
    {
      segment: "analytics",
      title: "Analytics",
      icon: <BarChartIcon />,
      children: [
        {
          segment: "sales",
          title: "Sales",
          icon: <DescriptionIcon />,
        },
        {
          segment: "traffic",
          title: "Traffic",
          icon: <DescriptionIcon />,
        },
      ],
    },
  ];

  const BRANDING = {
    title: "VINATABA APPLICATION",
  };

  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </AppProvider>
  );
}
