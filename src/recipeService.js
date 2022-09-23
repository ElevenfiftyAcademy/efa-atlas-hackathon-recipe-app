async function findByIngredients() {
    let response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=26073aef38ae4bb9a8e0a5f932d4c334&ingredients=garlic");
    return await response.json();
}

const recipeService = {
    findByIngredients: findByIngredients
}

export default recipeService;