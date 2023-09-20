import React from "react";
//import RecipeData from "./RecipeData"

function RecipeList({ recipes, setRecipes }) {
  
  // done TODO: Display the list of recipes using the structure of table that is provided.
  // done(deleteRecipe) TODO: Create at least one additional component that is used by this component.
  // done TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked


  // deletes the recipe by filtering out the recipe to be deleted by its index
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => 
    currentRecipes.filter((recipe, index) => index !== indexToDelete));
  }

  //html for each recipe
  console.log(recipes, 123);
  const eachRecipe = recipes.map((recipe, index) => {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img 
            src={recipe.photo}
            alt={recipe.name}
          />
        </td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
        </td>
      </tr>
    )
  });

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
            {eachRecipe}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
