import { Login } from "./Login";

export const Landing = () => {
	return (
		<>
			<div className="bg-gradient-to-tr from-primaryColor to-violet-300 bg-cover ">
				<div className="lg:mx-auto mx-56 max-w-7xl">
					<div className="flex items-center justify-center h-screen">
						<Login />
					</div>
				</div>
			</div>
		</>
	);
};
