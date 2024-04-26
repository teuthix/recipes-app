import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import HeaderBar from "./HeaderBar";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  return (
    <div className="App">
      <HeaderBar />
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;
