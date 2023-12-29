import { dbConnection } from "../Database/database.js";
import bcrypt from "bcrypt";
import GenerateToken from "../Helpers/TokenGenerator.js";

export const Login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const emailExist = await dbConnection.query(
			"select email from admins where email = $1",
			[email],
		);

		if (!emailExist) {
			return res.status(404).json({ message: "Admin email not found" });
		}

		const userPassword = await dbConnection.query(
			"select password from admins where email = $1",
			[email],
		);

		console.log(userPassword.rows[0].password);

		const isPasswordValid = await bcrypt.compare(
			password,
			userPassword.rows[0].password,
		);

		if (!isPasswordValid) {
			return res.status(403).json({ message: "Password incorrect" });
		}

		const userInfo = await dbConnection.query(
			"Select admin_id, firstname, lastname, email from admins where email = $1",
			[email],
		);

		const user = userInfo.rows[0];

		const token = GenerateToken(user.admin_id);

		res.cookie("token", token, process.env.ACCESS_TOKEN_SECRET, {
			secure: true,
			httpOnly: true,
			sameSite: "Strict",
		});

		return res.status(200).json({ token, user, message: "Success login" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
