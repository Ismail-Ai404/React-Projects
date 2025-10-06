/** @format */
import { useState } from "react";
import "./Body.css";
import Ingredients from "./Ingredients";
import ClaudeRecipe from "./ClaudeRecipe";

export default function AddForm() {
	const [input, setInput] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [recipe, setRecipe] = useState(false);

	function toggle() {
		setRecipe((prev) => !prev);
	}

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

			<Ingredients
				ingredients={ingredients}
				onDelete={handleDelete}
				toggleRecipeShown={toggle}
				recipeShown={recipe}
			/>
			{recipe && <ClaudeRecipe toggle={toggle} recipeOn={recipe} />}
		</main>
	);
}
