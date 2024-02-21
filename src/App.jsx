import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
	return (
		<>
			<Routers>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/forgot-password" element={<ForgotPassword/>} />
				</Routes>
			</Routers>
		</>
	);
}

export default App;
