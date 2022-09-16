//describe ("Spoonacular API Discover Tests", () => {
    xtest("Find by ingredients", () => {
        return fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=26073aef38ae4bb9a8e0a5f932d4c334")
            .then((response) => response.json())
            .then(data => {
                expect(data).toBe([]);
            });
    });
//});