import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Recipe from "./components/Recipe";
import "./css/style.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [bookmarkedRecipe, setBookmarkedRecipe] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookmarks"));
    if (data.length > 0) setBookmarkedRecipe(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedRecipe));
  }, [bookmarkedRecipe]);

  return (
    <div className="app">
      <Header
        setSearchTerm={setSearchTerm}
        bookmarkedRecipe={bookmarkedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
      <div className="main">
        <SearchResults
          searchTerm={searchTerm}
          setSelectedRecipe={setSelectedRecipe}
        />
        <Recipe
          recipeId={selectedRecipe}
          setBookmarkedRecipe={setBookmarkedRecipe}
          bookmarkedRecipe={bookmarkedRecipe}
        />
      </div>
    </div>
  );
};

export default App;
