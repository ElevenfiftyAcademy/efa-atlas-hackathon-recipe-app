//describe ("Spoonacular API Discover Tests", () => {
    test("Find by ingredients", () => {
        return fetch("https://api.spoonacular.com/recipes/findByIngredients")
            .then(data => {
                expect(data).toBe({});
            });
    });
//});