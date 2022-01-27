import React from "react";

const RecipeLink = ({ publisher, sourceUrl }) => {
  return (
    <div className="recipe-link">
      <h3 className="recipe-link__heading">How To Cook It</h3>
      <p className="recipe-link__text">
        This recipe was carefully designed and tested by{" "}
        <span className="recipe-link__publisher">{publisher}</span>. Please
        check out directions at their website.
      </p>
      <a href={sourceUrl} target="_blank" className="recipe-link__btn btn">
        Directions &rarr;
      </a>
    </div>
  );
};

export default RecipeLink;
