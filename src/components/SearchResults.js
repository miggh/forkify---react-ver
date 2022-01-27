import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./config";
import SearchResult from "./SearchResult";

const SearchResults = ({ searchTerm, setSelectedRecipe }) => {
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getRecipes = async () => {
      const { data } = await axios
        .get(`${API_URL}?search=${searchTerm}`)
        .catch(function (error) {
          if (error) console.log(error);
        });

      // TODO: handle errors

      setResults(data.data.recipes);
    };
    getRecipes();
  }, [searchTerm]);

  useEffect(() => {
    setPages(parseInt(results.length / 10 + 1));
  }, [results]);

  const nextHandler = () => {
    if (page === pages) return;
    setPage(page + 1);
  };

  const prevHandler = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  let renderedResults;

  if (results.length > 0) {
    renderedResults = results
      .slice((page - 1) * 10, page * 10)
      .map(({ id, publisher, image_url, title }) => {
        return (
          <SearchResult
            setSelectedRecipe={setSelectedRecipe}
            publisher={publisher}
            image_url={image_url}
            title={title}
            key={id}
            id={id}
          />
        );
      });
  } else if (searchTerm !== "" && results.length === 0) {
    renderedResults = (
      <div className="search-results__no-results">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 search-results__no-results__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p>No recipes found for your query! Please try again ;)</p>
      </div>
    );
  } else {
    renderedResults = null;
  }

  return (
    <div className="search-results">
      {renderedResults}
      {pages > 1 && (
        <div className="page-btns">
          {page !== 1 && (
            <button
              className="btn page-btn page-btn__previous"
              onClick={prevHandler}
            >
              &larr;{` Page ${page - 1}`}
            </button>
          )}
          {page < pages && (
            <button
              className="btn page-btn page-btn__next"
              onClick={nextHandler}
            >
              {`Page ${page + 1} `}&rarr;
            </button>
          )}
        </div>
      )}
      {results.length !== 0 && (
        <div className="copy-right">
          &copy;Copyright by{" "}
          <a
            className="copy-right__link"
            href="https://twitter.com/jonasschmedtman"
          >
            Jonas Schmedtmann
          </a>
          . Use for learning or your portfolio. Don't use to teach. Don't claim
          as your own.
        </div>
      )}
    </div>
  );
};

export default SearchResults;
