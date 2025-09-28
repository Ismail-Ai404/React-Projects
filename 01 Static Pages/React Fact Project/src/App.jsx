/** @format */

import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import NavBar from "./components/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<MainComponent />
		</>
	);
}

export default App;
