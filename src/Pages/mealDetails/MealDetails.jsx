import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState();

  async function getMealDetails() {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const response = await request.json();

    return response.meals[0];
  }

  async function prepareData() {
    const details = await getMealDetails();
    details.ingrediants = [];

    const actualDetails = new Map(Object.entries(details));
    for (let i = 0; i < actualDetails.size; i++) {
      if (actualDetails.get(`strIngredient${i}`)) {
        details.ingrediants.push(
          `${actualDetails.get(`strIngredient${i}`)} ${actualDetails.get(
            `strMeasure${i}`
          )}`
        );
      }
    }
    setMeal(details);
  }
  useEffect(() => {
    prepareData();
  }, []);

  return (
    <div className="row g-3">
      <div className="col-md-12 col-xl-4 col-xxl-4">
        <div className="imgBox">
          <img src={meal?.strMealThumb} className="img-fluid" alt="Corba" />
          <h2 className="mt-3 text-white">{meal?.strMeal}</h2>
        </div>
      </div>
      <div className="col-md-12 col-xl-8 col-xxl-8">
        <div className="infoBox text-white">
          <h3>Instructions</h3>
          <p>{meal?.strInstructions}</p>
          <h5 className="fw-bold">Area: {meal?.strArea}</h5>
          <h5 className="fw-bold">Category: {meal?.strCategory}</h5>
          <ul className="recips list-unstyled m-0 p-0 d-flex flex-wrap">
            {meal?.ingrediants.map((ingre, index) => (
              <li className="alert alert-info m-2 p-1" key={index}>
                {ingre}
              </li>
            ))}
          </ul>

          <div className="tags">
            <h4 className="fw-bold">Tags:</h4>

            {meal?.strTags
              ? meal?.strTags.split(",").map((tag, idx) => (
                  <span
                    key={idx}
                    className="d-inline-block me-2 p-1 mt-2 bg-info fw-bold rounded tags"
                  >
                    {tag}
                  </span>
                ))
              : "No Tags"}
          </div>

          <div className="links mt-4">
            <a
              className="bg-success me-2 text-decoration-none text-white d-inline-block p-2  rounded"
              href={meal?.strSource}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              className="bg-danger text-decoration-none text-white d-inline-block p-2  rounded"
              href={meal?.strYoutube}
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
