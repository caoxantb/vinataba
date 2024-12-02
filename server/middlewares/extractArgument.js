import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const extractArguments = async (req, res) => {
  const question = req.question;

  const ProductEvent = z.object({
    product: z.string(),
    date: z.string(),
  });

  try {
    const parseCompletion = await client.beta.chat.completions.parse({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert at structured data extraction. Convert unstructured text into this JSON format:`,
        },
        { role: "user", content: question },
      ],
      response_format: zodResponseFormat(ProductEvent, "event"),
    });

    const event = parseCompletion.choices[0].message.parsed;

    event.product = event.product.trim().split(" ")[0];

    req.event = event;
  } catch (error) {
    console.error("Error processing question with OpenAI:", error.message);
    return res.status(500).json({ error: "Failed to process the question." });
  }
};

export default extractArguments;
