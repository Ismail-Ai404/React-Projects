/** @format */

import reactLogo from "../assets/react.svg";
import "./NavBar.css";

export default function NavBar() {
	return (
		<>
			<header>
				<nav>
					<a href="https://react.dev" target="_blank">
						<img
							src={reactLogo}
							className="logo react"
							alt="React logo"
						/>
						<h1>ReactFacts</h1>
					</a>
				</nav>
			</header>
		</>
	);
}
