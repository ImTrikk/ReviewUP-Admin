export const LoginValidation = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		if (email === "" || password === "") {
			return res.status(400).json({ message: "Fields are required!" });
		}

		return next();
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
