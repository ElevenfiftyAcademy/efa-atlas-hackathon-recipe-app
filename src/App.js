import Flavorite from './Flavorite_logo.svg';
import Watermelon from './watermelon1.svg';
import './App.css';
import { useEffect, useState } from 'react';
import recipeService from './recipeService';

function App() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    recipeService.findByIngredients()
      .then(data => setRecipes(data))
  },[recipes])
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=26073aef38ae4bb9a8e0a5f932d4c334&includeIngredients=garlic
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="container" >
          <div className="row">
            <div className="col">
              <div className="logo-images">
                <img src={Watermelon} alt="watermelon" style={{width:"8rem"}}  />
                <img src={Flavorite} alt="logo" style={{width:"12.875rem"}}/>
              </div> 
              <h2>Recipes</h2>
              <ul data-testid="recipe-list" className="list-group">
                { recipes.map(recipe => 
                  <li key={recipe.id} className="list-group-item">{recipe.title}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
