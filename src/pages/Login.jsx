import { useState, useRef } from "react";
import { buildUrl } from "../utils/buildUrl";
import { Toaster, toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigator = useNavigate();
	const loadingBar = useRef(null);

	// login functionality
	const handleLogin = async (e) => {
		loadingBar.current.continuousStart(60);
		e.preventDefault();
		try {
			const res = await fetch(buildUrl("/login"), {
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

			console.log(data);

			if (res.ok) {
				toast.success(data.message);
				localStorage.setItem("admin_id", data.user.admin_id);
				localStorage.setItem("firstname", data.user.firstname);
				localStorage.setItem("lastname", data.user.lastname);
				localStorage.setItem("email", data.user.email);
				sessionStorage.setItem("token", data.token);
				setTimeout(() => {
					loadingBar.current.complete();
					navigator("/dashboard");
				}, 3000);
				loadingBar.current.complete();
			} else {
				toast.error(data.message);
			}
			loadingBar.current.complete();
		} catch (err) {
			toast.error("Cannot handle request as of the moment, try again later");
		}
	};

	return (
		<>
			<LoadingBar height={7} color="#E44F48" ref={loadingBar} />
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
							<label htmlFor="email">Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="ex. trikk@carsu.edu.ph"
								className="border border-gray-200 h-10 rounded px-2 outline-primaryColor text-xs"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="password">Password</label>
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
							<Link to="/forgot-password">
								<h1 className="text-primaryColor border border-primaryColor h-10 flex items-center justify-center px-4 rounded text-xs">
									forgot password
								</h1>
							</Link>
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
