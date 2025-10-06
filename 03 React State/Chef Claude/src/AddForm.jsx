/** @format */
import { useState } from "react";
import "./AddForm.css";
import Ingredients from "./Ingredients";

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
			<Ingredients ingredients={ingredients} onDelete={handleDelete} />
		</main>
	);
}
