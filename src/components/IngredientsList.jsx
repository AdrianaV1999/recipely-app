import React from "react";

function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    <section>
      <div className="list">
        <h2>Ingredients on hand:</h2>
        <ul aria-live="polite">{ingredientsListItems}</ul>
      </div>
      {props.ingredients.length > 3 && (
        <div className="recipe">
          <div className="r">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
