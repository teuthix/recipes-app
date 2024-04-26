import React from "react";

function EachRecipe({ deleteRecipe, recipes }) {
  const eachRecipe = recipes.map((recipe, index) => {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt={recipe.name} />
        </td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return eachRecipe;
}

export default EachRecipe;
