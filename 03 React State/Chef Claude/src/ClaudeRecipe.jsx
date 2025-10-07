/** @format */
import { useEffect, useState } from "react";
import { getRecipeFromMistral } from "./ai";
import ReactMarkdown from "react-markdown";
import "./ClaudeRecipe.css";

export default function ClaudeRecipe({ recipeOn, toggle, ingredients }) {
	const [generatedRecipe, setGeneratedRecipe] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchRecipe() {
			try {
				const recipe = await getRecipeFromMistral(ingredients);
				setGeneratedRecipe(recipe);
			} catch (err) {
				setError("Failed to fetch recipe.");
				console.error(err);
			}
		}
		if (recipeOn) fetchRecipe();
	}, [ingredients, recipeOn]);

	return (
		<section className="recipe-container">
			{error && <p className="error-text">{error}</p>}

			{!generatedRecipe && !error && (
				<div className="loading">
					<div className="spinner"></div>
					<p>Fetching your delicious recipe… 🍳</p>
				</div>
			)}

			{generatedRecipe && (
				<div className="recipe-content">
					<ReactMarkdown>{generatedRecipe}</ReactMarkdown>
				</div>
			)}

			<button className="close-btn" onClick={toggle}>
				Close
			</button>
		</section>
	);
}
