import React from "react";

function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    <section>
      <div className="list">
        <h2>Ingredients on hand:</h2>
        <ul>
          <li>{ingredientsListItems}</li>
        </ul>
      </div>
    </section>
  );
}

export default IngredientsList;
