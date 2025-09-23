/** @format */
import globe from "../assets/Globe.svg";

export default function Header() {
	return (
		<header>
			<img src={globe} alt="globe icon" />
			<h1>My travel journal.</h1>
		</header>
	);
}
