import React from "react";

const Ingredients = ({ originalServing, serving, ingredients }) => {
  const renderedIngredients = ingredients.map(
    ({ quantity, unit, description }, item) => {
      return (
        <div className="ingredients__text" key={item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ingredients__text__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{`${
            quantity * (serving / originalServing)
          } ${unit} ${description}`}</span>
        </div>
      );
    }
  );
  return (
    <div className="ingredients">
      <h4 className="ingredients__heading">Recipe Ingredients</h4>
      <div className="ingredients__list">{renderedIngredients}</div>
    </div>
  );
};

export default Ingredients;
