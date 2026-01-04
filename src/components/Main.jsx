import React, { useState } from "react";
import IngredientsList from "./IngredientsList";

function Main() {
  const [ingredients, setIngredients] = useState(["chicken"]);
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }
  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        ></input>
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} />}
    </main>
  );
}

export default Main;
