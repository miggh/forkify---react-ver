import React from "react";

const SearchResult = ({
  publisher,
  image_url,
  title,
  setSelectedRecipe,
  id,
}) => {
  const clickHandler = () => {
    setSelectedRecipe(id);
  };
  return (
    <div className="search-result" onClick={clickHandler}>
      <img className="search-result__img" src={image_url} alt={title} />
      <h3 className="search-result__title">
        {title.length > 30 ? `${title.slice(0, 28)}...` : title}
      </h3>
      <p className="search-result__publisher">{publisher}</p>
    </div>
  );
};

export default SearchResult;
