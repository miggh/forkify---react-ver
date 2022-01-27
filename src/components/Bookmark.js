import React from "react";
const Bookmark = ({ publisher, image_url, title, setSelectedRecipe, id }) => {
  const clickHandler = () => {
    setSelectedRecipe(id);
  };
  return (
    <div className="bookmark" onClick={clickHandler}>
      <img className="bookmark__img" src={image_url} alt={title} />
      <h3 className="bookmark__title">
        {title.length > 30 ? `${title.slice(0, 28)}...` : title}
      </h3>
      <p className="bookmark__publisher">{publisher}</p>
    </div>
  );
};

export default Bookmark;
