import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MealCard from "../../components/MealCard/MealCard";

const IngrediantsMeals = () => {
  const { ingrediant } = useParams();
  console.log(ingrediant);
  const [meals, setMeals] = useState();

  async function listAllIngrediantsMeals() {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediant}`
    );
    const response = await request.json();
    setMeals(response.meals);
  }

  useEffect(() => {
    listAllIngrediantsMeals();
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

export default IngrediantsMeals;
