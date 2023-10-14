import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MealCard from "../../components/MealCard/MealCard";

const AreaMeals = () => {
  const { area } = useParams();

  const [meals, setMeals] = useState();

  async function listAllAreaMeals() {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );

    const response = await request.json();
    setMeals(response.meals);
  }

  useEffect(() => {
    listAllAreaMeals();
  }, []);

  return (
    <>
      {meals?.map((meal) => (
        <div className="col-md-4" key={meal.idMeal}>
          <Link to={`/${meal.idMeal}`}>
            <MealCard meal={meal} />
          </Link>
        </div>
      ))}
    </>
  );
};
export default AreaMeals;
