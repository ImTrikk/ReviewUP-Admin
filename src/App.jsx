import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";

function App() {
	return (
		<>
			<Routers>
				<Routes>
					<Route path="/" element={<Landing />} />
				</Routes>
			</Routers>
		</>
	);
}

export default App;
