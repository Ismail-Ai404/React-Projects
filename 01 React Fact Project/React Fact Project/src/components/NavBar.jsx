/** @format */

import reactLogo from "../assets/react.svg";

export default function NavBar() {
	return (
		<>
			<a
				style={{ display: "flex" }}
				href="https://react.dev"
				target="_blank"
			>
				<img
					src={reactLogo}
					className="logo react"
					alt="React logo"
				/>
				<h1>ReactFacts</h1>
			</a>
		</>
	);
}
