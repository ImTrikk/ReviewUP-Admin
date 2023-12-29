import { IoWarning } from "react-icons/io5";

export const ReportCard = () => {
	return (
		<>
			<div className="bg-white border border-gray-200 shadow-md rounded-md w-[280px] h-[180px]">
				<div className="p-5 h-full">
					<h1>Reported reviewers</h1>
					<div className="w-full h-full flex items-center justify-center gap-5">
						<IoWarning size={70} className="text-red-500"/>
					<h1 className="text-red-600 text-7xl font-black">23</h1>
					</div>
				</div>
			</div>
		</>
	);
};
