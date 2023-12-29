import { useEffect, useState } from "react";
import { buildUrl } from "../utils/buildUrl";
import { Toaster, toast } from "sonner";
import { FaBook } from "react-icons/fa";

export const TotalReviewerCard = () => {
	const [count, setCount] = useState(0);

	const getCourseCount = async () => {
		try {
			const res = await fetch(buildUrl("/count-reviewers"), {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setCount(data.count);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCourseCount();
	}, []);

	return (
		<>
			<Toaster />
			<div className="bg-white border border-gray-200 shadow-md rounded-md w-[280px] h-[180px]">
				<div className="p-5 h-full">
					<h1>Total reviewers</h1>
					<div className="w-full h-full flex items-center justify-center gap-5">
						<FaBook size={50} className="text-primaryColor"/>
						<h1 className="text-primaryColor text-7xl font-black">{count}</h1>
					</div>
				</div>
			</div>
		</>
	);
};
