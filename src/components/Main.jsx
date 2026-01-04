import React from "react";

function Main() {
  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        ></input>
        <button>Add ingredient</button>
      </form>
    </main>
  );
}

export default Main;
