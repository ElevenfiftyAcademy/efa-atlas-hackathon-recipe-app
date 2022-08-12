import Flavorite from './Flavorite_logo.svg';
import Watermelon from './watermelon1.svg';
import './App.css';
import data from './result.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div style={{display:"flex", flexDirection: "column"}} >
         <div className="logo-images">
            <img src={Watermelon} alt="watermelon" width="100rem" height="100rem" />
            <img src={Flavorite} className="App-logo" alt="logo" width="100rem" height="100rem"/>
          </div> 
          <h1>Recipes</h1>
          <ul data-testid="recipe-list" className="list-group">
            { data.map(recipe => 
              <li key={recipe.id} className="list-group-item">{recipe.title}</li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
