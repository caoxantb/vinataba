const extractQuestion = (req, res, next) => {
	const { text } = req.body;

	if (!question) {
		return res.status(400).json({ error: "Field 'question' is required." });
	}

	req.question = text;

	next();
};

export default extractQuestion;
