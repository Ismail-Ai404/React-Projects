/** @format */
import { useState } from "react";
import "./AddForm.css";

export default function AddForm() {
	const [input, setInput] = useState("");
	const [ingredients, setIngredients] = useState([]);

	function submit(data) {
		if (!input.trim()) return;
		setIngredients((prev) => [...prev, input]);
		setInput("");
	}

	function handleDelete(index) {
		setIngredients((prev) => prev.filter((_, i) => i !== index));
	}

	return (
		<main>
			<form action={submit} className="add-ingredient-form">
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
					<p className="list-heading">Ingredients on hand:</p>
					<ol className="ingredient-list">
						{ingredients.map((ing, i) => (
							<li key={i} className="ingredient-card">
								<h2>{ing}</h2>
								<button
									className="delete-btn"
									onClick={() => handleDelete(i)}
									aria-label="Delete ingredient"
								>
									×
								</button>
							</li>
						))}
					</ol>
				</>
			)}
		</main>
	);
}
