import { useState } from "react";
import { Link } from "react-router-dom";
import { buildUrl } from "../utils/buildUrl";

export const ForgotPassword = () => {
	const [email, setEmail] = useState("");

	// send email
	const sendEmail = async () => {
		try {
			let res = await fetch(buildUrl('/forgot-password'), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				body: {
					email,
				},
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="h-screen bg-gradient-to-tr from-primaryColor to-violet-300 bg-cover">
				<div className="max-w-7xl mx-48 2xl:mx-auto pt-5">
					<div className="mt-32 md:w-[400px]">
						<h1 className="text-2xl font-bold text-white">Forgot Password</h1>
						<div className="pt-2">
							<p className="text-xs text-white">
								Enter your amdin email and check the One-Time-Password
							</p>
							<p className="text-xs text-white">
								Please do not share this with anyone
							</p>
						</div>
						<div className="mt-10">
							<h1 className="text-sm text-white font-semibold">Email Address</h1>
							<div className="pt-2">
								<input
									type="text"
									placeholder="Ex. triku@carsu.edu.ph"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="h-10 outline-none px-4 rounded bg-white text-sm w-full"
								/>
								<div className="pt-2 flex justify-end items-center gap-2">
									<Link to="/">
										<h1 className="text-xs text-white">go back to login</h1>
									</Link>
									<button
										onClick={sendEmail}
										className="bg-white text-violet-500 h-10 rounded text-xs px-2">
										Send Email
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
