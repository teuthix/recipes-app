import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialForm });

  // everytime something in target changes, updates the FormData
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // when hitting submit
  // resets formData to initialForm
  // fixed issue: setRecipes was an object not an array
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
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
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td className="area">
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td className="area">
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
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
