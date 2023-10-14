import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../Redux/Home_Slice/HomeSlice";
import { Link } from "react-router-dom";
import MealCard from "../../components/MealCard/MealCard";

const Home = () => {
  const { meals, error, loading } = useSelector((state) => state.populare);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        meals?.map((meal) => (
          <div className="col-md-4" key={meal.idMeal}>
            <Link to={`/${meal.idMeal}`}>
              <MealCard meal={meal} />
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default Home;
