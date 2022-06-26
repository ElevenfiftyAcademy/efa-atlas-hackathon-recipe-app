import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <img src={logo} className="App-logo" alt="logo" width="100rem" height="100rem"/>
          <h1>Search Results</h1>
          <ul data-testid="recipe-list">
            <li data-testid="recipe-list-item">Orange Chicken</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
