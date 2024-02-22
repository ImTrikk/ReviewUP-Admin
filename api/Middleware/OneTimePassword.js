export const SendOtp = async (req, res) => {
	try {
		// implemnt logic for recieving the email and chekcing in db
		// send otp to the requesor
		return req.status(200).json({message: "One Time Password to {email}"})
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

//checking otp sent by user
export const CheckOtp = (req, res, next) => {
	try {
		return next();
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
