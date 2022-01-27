import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import RecipeLink from "./RecipeLink";

const RecipeDetail = ({ recipe, bookmarked, setBookmarked }) => {
  const [serving, setServing] = useState(recipe.servings);

  // console.log(recipe);

  const plusHandler = () => {
    setServing(serving + 1);
  };

  const minusHandler = () => {
    if (serving === 1) return;
    setServing(serving - 1);
  };

  const bookmarkHandler = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <React.Fragment>
      <div
        className="recipe__img"
        style={{
          backgroundImage: `url(${recipe.image_url})`,
        }}
      >
        <div className="recipe__title">
          <span>{recipe.title}</span>
        </div>
      </div>
      <div className="recipe__manual">
        <div className="recipe__manual__time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 recipe__manual__time__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="recipe__manual__time__text">
            <span>{recipe.cooking_time}</span> minutes
          </p>
        </div>
        <div className="recipe__manual__serving">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 recipe__manual__serving__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <p className="recipe__manual__serving__text">
            <span>{serving}</span> servings
          </p>
          <button
            className="recipe__manual__serving__button"
            onClick={minusHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 recipe__manual__serving__button__icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            className="recipe__manual__serving__button"
            onClick={plusHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 recipe__manual__serving__button__icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button className="recipe__manual__bookmark" onClick={bookmarkHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 recipe__manual__bookmark__icon ${
              bookmarked ? "selected" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
      <Ingredients
        serving={serving}
        originalServing={recipe.servings}
        ingredients={recipe.ingredients}
      />
      <RecipeLink publisher={recipe.publisher} sourceUrl={recipe.source_url} />
    </React.Fragment>
  );
};

export default RecipeDetail;
