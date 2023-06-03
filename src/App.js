import "./App.css";
import Reach from "./components/Reach.js";
import Footer from "./components/Footer.js";
import Method from "./components/Method/Method";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Reach />
								<Footer />
							</>
						}
					/>
					<Route path="method" element={<Method />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
