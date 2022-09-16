import data from './result.json';

function findByIngredients() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 100);
    })
}

const recipeService = {
    findByIngredients: findByIngredients
}

export default recipeService;