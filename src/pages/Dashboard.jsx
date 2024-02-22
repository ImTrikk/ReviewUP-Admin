import { useNavigate } from "react-router-dom";
import { ReportCard } from "../components/ReportCard";
import { TotalReviewerCard } from "../components/TotalReviewersCard";
import { buildUrl } from "../utils/buildUrl";
import { useRef } from "react";

import { Toaster, toast } from "sonner";
import LoadingBar from "react-top-loading-bar";
import { Reports } from "../components/Reports";

export const Dashboard = () => {
	const firstname = localStorage.getItem("firstname");
	const lastname = localStorage.getItem("lastname");
	const email = localStorage.getItem("email");

	const loadingBar = useRef(null);
	const navigator = useNavigate();

	// handle logout
	const handleLogout = async () => {
		loadingBar.current.continuousStart(60);
		const admin_id = localStorage.getItem("admin_id");
		try {
			const res = await fetch(buildUrl(`/logout/${admin_id}`), {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			const data = await res.json();
			if (res.ok) {
				toast.success(data.message);
				loadingBar.current.complete();
				localStorage.clear();
				sessionStorage.clear();
				setTimeout(() => {
					navigator("/");
				}, 3000);
			} else {
				toast.error(data.message);
				loadingBar.current.complete();
			}
		} catch (err) {
			loadingBar.current.complete();
			console.log(err);
			toast.info("There is a problem handling your request, try again later");
		}
	};

	return (
		<>
			<div>
				<LoadingBar height={7} color="#E44F48" ref={loadingBar} />
				<Toaster />
				<div className="relative">
					<img src="/static/images/header.png" alt="" className="w-full h-[120px]" />
					<div className="absolute top-0 mx-48 mt-10 ">
						<h1 className="text-3xl font-bold text-white">
							ReviewUP Admin
						</h1>
						<p className="text-white font-light">
							Manage student's reviewers and courses
						</p>
					</div>
				</div>
				<div className="max-w-7xl mx-48 2xl:mx-auto pt-5">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-3">
							<img
								src="/static/images/admin.png"
								alt=""
								className="rounded-full w-[100px] border border-primaryColor"
							/>
							<div>
								<h1 className="text-2xl font-bold">
									{firstname} {lastname}
								</h1>
								<p>{email}</p>
							</div>
						</div>
						<button
							onClick={handleLogout}
							className="h-10 bg-primaryColor rounded px-4 text-white text-xs hover:border border-primaryColor hover:bg-white hover:text-primaryColor">
							Logout
						</button>
					</div>
					<div className="pt-10">
						<h1 className="">Dashboard</h1>
						<div className="pt-2">
							<hr />
						</div>
						<div className="flex items-center gap-5 pt-5">
							<TotalReviewerCard />
							<ReportCard />
						</div>
						<div className="pt-10">
							<h1>Reported reviewers</h1>
							<div className="pt-2">
								<hr />
							</div>
							<div className="pt-5">
								<Reports />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
