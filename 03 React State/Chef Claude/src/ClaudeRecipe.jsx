/** @format */
import { useEffect, useState } from "react";
import { getRecipeFromMistral } from "./ai";

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
		<section>
			<h2>Chef Claude Recommends:</h2>
			<article
				className="suggested-recipe-container"
				aria-live="polite"
			>
				{error && <p style={{ color: "red" }}>{error}</p>}
				{!generatedRecipe && !error && <p>Loading recipe...</p>}
				{generatedRecipe && (
					<div>
						{/* Render your recipe here, e.g.: */}
						<p>{generatedRecipe}</p>
					</div>
				)}
			</article>
		</section>
	);
}
