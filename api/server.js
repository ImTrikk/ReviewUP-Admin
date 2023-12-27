import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json({}));
app.use(bodyParser.urlencoded());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

app.listen(3000, () => console.log("Server is running on port 3000"));
