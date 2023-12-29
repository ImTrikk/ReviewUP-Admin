import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";

function App() {
	return (
		<>
			<Routers>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Routers>
		</>
	);
}

export default App;
