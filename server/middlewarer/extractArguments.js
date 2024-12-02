import OpenAI from "openai";

const client = new OpenAI({
	apiKey: process.env["OPENAI_API_KEY"],
});

const extractArguments = async (req, res, next) => {
	const question = req.question;

	const ProductEvent = {
		product: "string",
		date: "string",
	};

	try {
		const parseCompletion = await client.beta.chat.completions.parse({
			model: "gpt-4o-mini",
			messages: [
				{
					role: "system",
					content:
						"You are an expert at structured data extraction. You will be given unstructured text from a research paper and should convert it into the given structure.",
				},
				{ role: "user", content: question },
			],
			response_format: ProductEvent,
		});

		const event = parseCompletion.choices[0].message.parsed;

		event.product = event.product.trim().split(" ")[0];

		req.event = event;

		next();
	} catch (error) {
		console.error("Error processing question with OpenAI:", error.message);
		return res.status(500).json({ error: "Failed to process the question." });
	}
};

export default extractArguments;
