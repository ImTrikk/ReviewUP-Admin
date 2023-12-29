import { ReportCard } from "../components/ReportCard";
import { TotalReviewerCard } from "../components/TotalReviewersCard";

export const Dashboard = () => {
	const firstname = localStorage.getItem("firstname");
	const lastname = localStorage.getItem("lastname");
	const email = localStorage.getItem("email");

	return (
		<>
			<div>
				<img src="/static/images/header.png" alt="" className="w-full h-[200px]" />
				<img src="" alt="" />
				<div className="max-w-7xl mx-48 2xlmx-auto">
					<h1 className="text-2xl font-bold">
						{firstname} {lastname}
					</h1>
					<p>{email}</p>
					<div className="pt-5">
						<h1 className="">Admin Dashboard</h1>
						<hr />
						<div className="flex items-center gap-5 pt-5">
							<TotalReviewerCard />
							<ReportCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
