import React from "react";

const MealCard = ({ meal: { strMealThumb, strMeal } }) => {
  return (
    <div className="box text-center bg-secondary p-2 position-relative">
      <img
        src={strMealThumb}
        alt={strMealThumb}
        className="w-100"
        loading="lazy"
      />
      <div className="layer position-absolute">
        <h4>{strMeal}</h4>
      </div>
    </div>
  );
};

export default MealCard;
