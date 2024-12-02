// import OpenAI from 'openai';
// import { zodResponseFormat } from "openai/helpers/zod";
// import { z } from "zod";
// import dotenv from "dotenv";

// dotenv.config();

// const client = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'],
// });

// const ProductEvent = z.object({
//   product: z.string(),
//   date: z.string(),
// });

// export async function main() {
//   const completion = await client.beta.chat.completions.parse({
//     model: "gpt-4o-mini",
//     messages: [
//       { role: "system", content: "Extract the event information." },
//       { role: "user", content: "What is the price of Cows meat in 10th December 2024?" },
//     ],
//     response_format: zodResponseFormat(ProductEvent, "event"),
//   });

//   const event = completion.choices[0].message.parsed;
//   console.log(event);
// }

// main();