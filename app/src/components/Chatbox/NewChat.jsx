import React from "react";
import { useNavigate } from "react-router-dom";
import { useChatbox } from "../../contexts/ChatboxContext";
import { Button, Box, Typography, useTheme } from "@mui/material";

export default function NewChat() {
  const { addChatbox } = useChatbox();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAddChatbox = () => {
    const uniqueId = Date.now();
    addChatbox(uniqueId);
    navigate(`/chatbot/${uniqueId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "600px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "auto",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Instruction
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. <strong>User Interaction:</strong> Start by asking the chatbot a
          question about the projected data you are interested in.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. <strong>API and Data Parsing:</strong> The chatbot uses the OpenAI
          API to process your query and converts the response into a structured
          data object.
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. <strong>Validation Check:</strong> The system validates your query
          to ensure it is relevant to the intended topic or dataset.
        </Typography>
        <Typography variant="body1" gutterBottom>
          4. <strong>Machine Learning Analysis:</strong> If the query is valid,
          the chatbot passes the data to machine learning models to compute and
          generate predictive insights.
        </Typography>
        <Typography variant="body1" gutterBottom>
          5. <strong>Response Delivery:</strong> Finally, the chatbot formats
          the predictive data into a user-friendly response and displays it as
          chat text.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          mt={2}
          sx={{ color: theme.palette.text.secondary }}
        >
          Make sure your questions are specific and relevant to the data you
          wish to analyze!
        </Typography>
      </Box>
      <Button onClick={handleAddChatbox} variant="contained">
        Start New Chat
      </Button>
    </div>
  );
}
