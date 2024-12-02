import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const sendAnswer = async (req, res) => {
  if (!req.data) {
    return res.status(400).json({ error: "Forecast data is missing." });
  }

  try {
    const createCompletion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an expert at transforming structured data into narrative responses for users.",
        },
        {
          role: "user",
          content: `Transform the following structured data into a narrative response, including the price of the product: ${JSON.stringify(
            req.data,
            null,
            2
          )}`,
        },
      ],
    });

    const answer = createCompletion.choices[0].message.content;

    req.answer = answer;
  } catch (error) {
    console.error("Error creating answer with OpenAI:", error.message);
    return res.status(500).json({ error: "Failed to create user answer." });
  }
};

export default sendAnswer;
