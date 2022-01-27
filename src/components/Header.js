import React, { useState } from "react";
import Bookmarks from "./Bookmarks";

const Header = ({ setSearchTerm, bookmarkedRecipe, setSelectedRecipe }) => {
  const [userInput, setUserInput] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchTerm(userInput);
    setUserInput("");
  };

  const showBookmarksHandler = () => {
    setShowBookmarks(true);
  };

  const hideBookmarksHandler = () => {
    setShowBookmarks(false);
  };

  return (
    <div className="header">
      <img className="header__logo" src="logo.png" alt="logo" />
      <form className="header__searchbar" onSubmit={searchHandler}>
        <input
          type="text"
          value={userInput}
          onChange={inputHandler}
          className="header__searchbar__input"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button className="btn header__searchbar__btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 header__searchbar__btn__icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="header__searchbar__btn__text">Search</span>
        </button>
      </form>
      <button className="header__add-recipe-btn btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="header__add-recipe-btn__icon h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <span className="header__add-recipe-btn__text">Add Recipe</span>
      </button>
      <button
        className="btn header__bookmarks-btn"
        onMouseOver={showBookmarksHandler}
        onMouseOut={hideBookmarksHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="header__add-recipe-btn__icon h-6 w-6"
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
        <span className="header__bookmarks-btn__text">Bookmarks</span>
      </button>
      <Bookmarks
        showBookmarks={showBookmarks}
        setShowBookmarks={setShowBookmarks}
        bookmarkedRecipe={bookmarkedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    </div>
  );
};

export default Header;
