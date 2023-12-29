import { dbConnection } from "../Database/database";

export const Login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const emailExist = await dbConnection.query(
			"select * from admins where email = $1",
			[email],
		);

		console.log(emailExist.rows[0]);

		if (!emailExist) {
			return res.status(404).json({ message: "Admin email not found" });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
