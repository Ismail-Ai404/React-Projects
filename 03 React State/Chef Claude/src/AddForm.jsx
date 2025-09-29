/** @format */
import { useState } from "react";
import "./AddForm.css";

export default function AddForm() {
	const [input, setInput] = useState("");
	const [ingredients, setIngredients] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		if (!input.trim()) return;
		setIngredients((prev) => [...prev, input]);
		setInput("");
	}

	return (
		<main>
			<form onSubmit={handleSubmit} className="add-ingredient-form">
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					name="ingredient"
				/>
				<button>Add ingredient</button>
			</form>

			{ingredients.length === 0 && (
				<p className="hint">
					Claude will suggest recipes based on these ingredients.
				</p>
			)}

			{ingredients.length > 0 && (
				<>
					<p className="list-heading">List of ingredients:</p>
					<div className="ingredient-list">
						{ingredients.map((ing, i) => (
							<div key={i} className="ingredient-card">
								<h2>{ing}</h2>
							</div>
						))}
					</div>
				</>
			)}
		</main>
	);
}
