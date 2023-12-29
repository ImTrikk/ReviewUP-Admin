import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConnection } from "./Database/database.js";
import { AdminRouter } from "./Router/Router.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

// Ensure the database connection is established before starting the server
dbConnection
	.connect()
	.then(() => {
		app.timeout = 600000;

		app.use("/api", AdminRouter);

		// Start the server
		app.listen(3000, () => {
			console.log("Server running on localhost 3000");
		});
		console.log("Connected to postgre");
	})
	.catch((err) => {
		console.error("Error connecting with the PostgreSQL database");
		console.error(err);
		process.exit(1); // Exit the process with an error code
	});
