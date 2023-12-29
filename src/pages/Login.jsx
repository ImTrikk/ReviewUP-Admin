import { useState } from "react";
import { buildUrl } from "../utils/buildUrl";
import { Toaster, toast } from "sonner";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// login functionality
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
			const data = await res.json();
			if (res.ok) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		} catch (err) {
			toast.error("Cannot handle request as of the moment, try again later");
			console.log(err);
		}
	};

	return (
		<>
			<Toaster />
			<div className="p-10 w-[500px] bg-white border border-gray-100 shadow-md rounded-md h-auto">
				<div className="flex items-center gap-2">
					<img src="/static/images/mainlogo.png" alt="" className="w-[50px]" />
					<div>
						<h1 className="font-bold text-3xl text-primaryColor">Admin Login</h1>
						<p className="text-sm text-gray-500">
							Manage students learning materials
						</p>
					</div>
				</div>
				<form>
					<div className="space-y-4 pt-5">
						<div className="flex flex-col gap-2">
							<label htmlFor="">Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="ex. trikk@carsu.edu.ph"
								className="border border-gray-200 h-10 rounded px-2 outline-primaryColor text-xs"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Password</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								className="border border-gray-200 h-10 rounded px-2 outline-primaryColor text-xs"
							/>
						</div>
					</div>
					<div className="pt-5 flex justify-end">
						<div className="flex items-center gap-2">
							<a
								href="https://review-up.vercel.app"
								className="text-primaryColor border border-primaryColor h-10 flex items-center justify-center px-4 rounded">
								review-up
							</a>
							<button
								onClick={handleLogin}
								className="bg-violet-500 hover:bg-white hover:border hover:border-primaryColor hover:text-primaryColor h-10  rounded px-4 text-xs text-white font-medium">
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
