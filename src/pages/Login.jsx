import { useState } from "react";
import { buildUrl } from "../utils/buildUrl";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		try {
			e.preventDefault();
			const res = await fetch(buildUrl("/api/login"), {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (res.ok) {
				const data = await res.json();
				console.log(data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="flex items-center justify-center">
				<div className="p-10 bg-white shadow h-auto">
					<h1>Admin Login</h1>{" "}
					<form>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="ex. trikk@carsu.edu.ph"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Password</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
							/>
						</div>
						<div>
							<button
								onClick={handleLogin}
								className="bg-violet-300 rounded px-2 text-xs">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
