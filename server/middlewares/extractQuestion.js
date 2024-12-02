const extractQuestion = (req, res) => {
  const { text } = req.body;

  console.log(text);

  if (!text) {
    return res.status(400).json({ error: "Field 'question' is required." });
  }

  req.question = text;
};

export default extractQuestion;
