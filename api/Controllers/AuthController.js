import { dbConnection } from "../Database/database.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const emailExist = await dbConnection.query(
			"select email from admins where email = $1",
			[email],
		);

		console.log(emailExist.rows[0]);

		if (!emailExist) {
			return res.status(404).json({ message: "Admin email not found" });
		}

		const userPassword = await dbConnection.query(
			"select password from admins where password = $1",
			[password],
		);

		const isPasswordValid = await bcrypt.compare(userPassword.rows[0]);

		if (!isPasswordValid) {
			return res.status(403).json({ message: "Password incorrect" });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};

