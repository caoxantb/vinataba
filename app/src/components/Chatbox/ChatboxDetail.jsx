import React, { useState } from "react";
import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ChatboxDetail() {
  const theme = useTheme();
  const [data, setData] = useState([
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
    {
      sendBy: "user",
      timestamp: "timestamp",
      text: "This is a box with text inside. This is a box with text inside.",
    },
    {
      sendBy: "llm",
      timestamp: "timestamp",
      text: "This is a box with text inside.",
    },
  ]);
  const [text, setText] = useState("");

  const isDarkMode = theme.palette.mode === "dark";
  const backgroundColor = isDarkMode
    ? theme.palette.grey[800]
    : theme.palette.background.default;
  const textColor = isDarkMode
    ? theme.palette.text.primary
    : theme.palette.text.secondary;

  const sendMessage = (newMessage) => {
    setData([
      { sendBy: "user", timestamp: new Date().toISOString(), text: newMessage },
      ...data,
    ]);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
    console.log("Text changed to:", event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "600px",
          overflow: "auto",
          scrollBehavior: "smooth",
          flexDirection: "column-reverse",
        }}
      >
        {data.map((d) => (
          <div
            style={{
              display: "flex",
              justifyContent: `flex-${d.sendBy === "user" ? "end" : "start"}`,
            }}
          >
            <Box
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                padding: 2,
                marginY: 2,
                borderRadius: "8px",
                backgroundColor: backgroundColor,
                textAlign: "left",
                width: "fit-content",
                maxWidth: "50%",
              }}
            >
              <Typography variant="body1" color={textColor}>
                {d.text}
              </Typography>
            </Box>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", position: "sticky", bottom: 0 }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            paddingY: 4,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            id="outlined-multiline-flexible fullWidth"
            label="Multiline"
            multiline
            maxRows={4}
            value={text}
            onChange={handleChange}
          />
        </Box>
        <Button
          sx={{ marginLeft: 4, marginY: 4 }}
          variant="contained"
          color="success"
          onClick={() => sendMessage(text)}
        >
          Send
        </Button>
      </div>
    </>
  );
}
