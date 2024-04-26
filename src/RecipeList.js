import React from "react";
import EachRecipe from "./EachRecipe";

function RecipeList({ recipes, setRecipes }) {
  // deletes the recipe by filtering out the recipe to be deleted by its index
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );
  };

  // what comes out of RecipeList
  // table header and each recipe from recipes(RecipeData)
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="area">Ingredients</th>
            <th className="area">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <EachRecipe deleteRecipe={deleteRecipe} recipes={recipes} />
        </tbody>
        {/* <tbody>{eachRecipe}</tbody> */}
      </table>
    </div>
  );
}

export default RecipeList;
