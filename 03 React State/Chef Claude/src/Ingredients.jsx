/** @format */
import "./AddForm.css";
import { useState } from "react";
export default function Ingredients({ ingredients, onDelete }) {
	return (
		<>
			{ingredients.length === 0 && (
				<p className="hint">
					Claude will suggest recipes based on these ingredients.
				</p>
			)}

			{ingredients.length > 0 && (
				<>
					<p className="list-heading">Ingredients on hand:</p>
					<ol className="ingredient-list">
						{ingredients.map((ing, i) => (
							<li key={i} className="ingredient-card">
								<h2>{ing}</h2>
								<button
									className="delete-btn"
									onClick={() => onDelete(i)}
									aria-label="Delete ingredient"
								>
									×
								</button>
							</li>
						))}
					</ol>
				</>
			)}
		</>
	);
}
