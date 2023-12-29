import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function GenerateToken(admin_id) {
	const payload = {
		user: {
			id: admin_id,
		},
	};

	const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "3hrs",
	});

	return token;
}

export default GenerateToken;
