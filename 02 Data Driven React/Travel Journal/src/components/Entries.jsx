/** @format */

import Entry from "./Entry";
import visit from "../data/visit";

export default function Entries() {
	const allVisits = visit.map((v, key = v.id) => {
		return (
			<Entry
				img={v.img}
				title={v.title}
				country={v.country}
				googleMapsLink={v.googleMapsLink}
				text={v.text}
				dates={v.dates}
			/>
		);
	});

	return allVisits;
}
