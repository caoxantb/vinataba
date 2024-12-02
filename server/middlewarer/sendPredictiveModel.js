import axios from "axios";

const sendPredictiveModel = async (req, res, next) => {
	if (!req.event) {
		return res.status(400).json({ error: "Event data is missing." });
	}

	const url = "https://1fp0gtvti6.execute-api.eu-north-1.amazonaws.com/prod/forecast";

	try {
		const response = await axios.post(url, req.event);

		const data = response.data;

		req.data = data;

		next();
	} catch (error) {
		console.error("Error fetching forecast data:", error.message);
		return res.status(500).json({ error: "Failed to fetch forecast data." });
	}
};

export default sendPredictiveModel;
