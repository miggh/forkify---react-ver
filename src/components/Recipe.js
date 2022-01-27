import axios from "axios";
import { API_URL } from "./config";
import React, { useState, useEffect } from "react";
import RecipeDetail from "./RecipeDetail";

const Recipe = ({ recipeId, setBookmarkedRecipe, bookmarkedRecipe }) => {
  const [recipe, setRecipe] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (!recipeId) return;
    const getRecipe = async () => {
      const { data } = await axios.get(`${API_URL}/${recipeId}`);
      setRecipe(data.data.recipe);
    };
    getRecipe();
  }, [recipeId]);

  useEffect(() => {
    setBookmarked(bookmarkedRecipe.some((rec) => rec.title === recipe.title));
  }, [recipe]);

  useEffect(() => {
    if (bookmarked) {
      if (bookmarkedRecipe.some((rec) => rec.title === recipe.title)) return;
      setBookmarkedRecipe((prevState) => {
        return [...prevState, recipe];
      });
    } else if (recipe && !bookmarked) {
      setBookmarkedRecipe((prevState) => {
        return prevState.filter((rec) => {
          return rec.title !== recipe.title;
        });
      });
    }
  }, [bookmarked]);

  return (
    <div className="recipe">
      {!recipeId && (
        <div className="recipe__initial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 recipe__initial__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="recipe__initial__text">
            Start by searching for a recipe or an ingredient. Have fun!
          </p>
        </div>
      )}
      {recipe && (
        <RecipeDetail
          recipe={recipe}
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
          bookmarkedRecipe={bookmarkedRecipe}
        />
      )}
    </div>
  );
};

export default Recipe;
