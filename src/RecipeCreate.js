import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // done TODO: Add the required input and textarea form elements.
  // done TODO: Add the required submit and change handlers
  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };


  //instead of formData, setRecipes to add to recipes
  const [formData, setFormData] = useState({ ...initialForm });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...initialForm });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
