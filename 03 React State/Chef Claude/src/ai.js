/** @format */
import Cerebras from "@cerebras/cerebras_cloud_sdk";

const SYSTEM_PROMPT = `
You are pretending to be me (Ismail) so greet them accordingly as this will go into my Portfolio projects and who's also a chef. You will receive a list of ingredients that a user has and suggest a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention. The recipe can include additional ingredients, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Initialize Cerebras client using Vite env variable
const cerebrasApiKey = import.meta.env.VITE_CEREBRAS_API_KEY;
//TODO ADD the env here

if (!cerebrasApiKey) {
	throw new Error(
		"Cerebras API key missing: Please set VITE_CEREBRAS_API_KEY in your .env file and restart the dev server."
	);
}
const cerebras = new Cerebras({
	apiKey: cerebrasApiKey,
});

export async function getRecipeFromMistral(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(", ");

	try {
		// Construct the chat messages
		const messages = [
			{
				role: "system",
				content: SYSTEM_PROMPT,
			},
			{
				role: "user",
				content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
			},
		];

		// Create the streaming completion
		const stream = await cerebras.chat.completions.create({
			model: "qwen-3-235b-a22b-instruct-2507",
			messages,
			stream: true,
			max_completion_tokens: 2000,
			temperature: 0.7,
			top_p: 0.8,
		});

		let fullRecipe = "";

		for await (const chunk of stream) {
			fullRecipe += chunk.choices[0]?.delta?.content || "";
		}

		return fullRecipe || "No recipe generated.";
	} catch (err) {
		console.error("Error fetching recipe from Cerebras:", err);

		// Fallback recipe
		return `# 😅 Sorry, looks like I'm busy!

Here's an easy recipe you could try:

## **Simple Stir-Fry Bowl**

### **Ingredients:**
- ${ingredientsArr.map((ing) => `• ${ing}`).join("\n- ")}
- 2 tbsp olive oil
- Salt and pepper to taste
- 1 tsp garlic powder
- Fresh herbs (optional)

### **Instructions:**
1. Prep all ingredients.
2. Heat oil in a pan over medium heat.
3. Add your ingredients, starting with the protein or hardest vegetable.
4. Stir-fry for 5-7 minutes.
5. Season with salt, pepper, and garlic powder.
6. Garnish with fresh herbs and enjoy!

*Quick, healthy, and delicious!*`;
	}
}
