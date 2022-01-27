import React from "react";
import Bookmark from "./Bookmark";
const Bookmarks = ({
  setShowBookmarks,
  bookmarkedRecipe,
  setSelectedRecipe,
  showBookmarks,
}) => {
  const showBookmarksHandler = () => {
    setShowBookmarks(true);
  };

  const hideBookmarksHandler = () => {
    setShowBookmarks(false);
  };

  const renderedBookmarks = bookmarkedRecipe.map(
    ({ publisher, image_url, title, id }) => {
      return (
        <Bookmark
          key={id}
          id={id}
          publisher={publisher}
          image_url={image_url}
          title={title}
          setSelectedRecipe={setSelectedRecipe}
        />
      );
    }
  );

  return (
    <div
      onMouseOver={showBookmarksHandler}
      onMouseOut={hideBookmarksHandler}
      className={`bookmarks ${showBookmarks ? "bookmarks__show" : ""}`}
    >
      {bookmarkedRecipe.length === 0 && (
        <div className="bookmarks__empty">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bookmarks__empty__icon"
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
          <p>No bookmarks yet. Find a nice recipe and bookmark it ;)</p>
        </div>
      )}
      {bookmarkedRecipe.length > 0 && renderedBookmarks}
    </div>
  );
};

export default Bookmarks;
