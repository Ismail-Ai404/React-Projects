/** @format */
import "./Body.css";
export default function Ingredients({
	ingredients,
	onDelete,
	toggleRecipeShown,
	recipeShown,
}) {
	return (
		<>
			{!recipeShown && ingredients.length === 0 && (
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
					{ingredients.length > 3 && (
						<div className="get-recipe-container">
							<div>
								<h3>Ready for a recipe?</h3>
								<p>
									Generate a recipe from your list of
									ingredients.
								</p>
							</div>
							<button onClick={toggleRecipeShown}>
								Get a recipe
							</button>
						</div>
					)}
				</>
			)}
		</>
	);
}
