import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [drink, setDrink] = useState ("")

  function getApi() {

    return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())

    .then((json) => {
      console.log(json.drinks)
      setDrink(json.drinks);
    })

    .catch((error) => {
    console.error(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=> getApi()}> Priekā!</button>
        {drink === '' ?
        <p>
          Cocktail of the night!
        </p>
        :
        <div>
        <h1>
          {drink[0].strDrink}
        </h1>
        <h3>
          {drink[0].strAlcoholic}
        </h3>
        <img src={drink[0].strDrinkThumb} alt='cocktail'/>
        <h3>
          {drink[0].strInstructions}
        </h3>
        <h4>
          {drink[0].strIngredient1} {drink[0].strMeasure1}
        </h4>
        <h4>
          {drink[0].strIngredient2} {drink[0].strMeasure2}
        </h4>
        <h4>
          {drink[0].strIngredient3} {drink[0].strMeasure3}
        </h4>
        <h4>
          {drink[0].strIngredient4} {drink[0].strMeasure4}
        </h4>
        <h4>
          {drink[0].strIngredient5} {drink[0].strMeasure5}
        </h4>
        <h4>
          {drink[0].strIngredient6} {drink[0].strMeasure6}
        </h4>
        <h4>
          {drink[0].strIngredient7} {drink[0].strMeasure7}
        </h4>
        <h4>
          {drink[0].strIngredient8} {drink[0].strMeasure8}
        </h4>
        <h4>
          {drink[0].strIngredient9} {drink[0].strMeasure9}
        </h4>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
