import React, { useState } from "react";
import MealCard from "../../components/MealCard/MealCard";
import { Link } from "react-router-dom";

const Search = () => {
  const [meals, setMeals] = useState();

  async function getData(type, term) {
    if (!term) {
      return setMeals([]);
    }
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`
    );
    const response = await request.json();
    term && response.meals && setMeals(response.meals);
  }

  return (
    <div>
      <form className="d-flex gap-2">
        <input
          type="text"
          placeholder="By Meal Name"
          className="form-control w-50"
          id="searchByName"
          onChange={(e) => getData("s", e.target.value)}
        />
        <input
          type="text"
          placeholder="By First Letter"
          className="form-control w-50"
          id="searchByFirstLetter"
          maxLength={1}
          onChange={(e) => getData("f", e.target.value)}
        />
      </form>
      <div className="mt-3 results">
        <div className="row g-3">
          {meals?.length > 0 ? (
            meals.map((meal) => (
              <div className="col-md-4" key={meal.idMeal}>
                <Link to={`/${meal.idMeal}`}>
                  <MealCard meal={meal} />
                </Link>
              </div>
            ))
          ) : (
            <h2 className="text-white">No Meals To Show</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
