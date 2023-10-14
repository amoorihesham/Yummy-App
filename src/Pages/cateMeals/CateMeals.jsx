import { Link, useParams } from "react-router-dom";
import MealCard from "../../components/MealCard/MealCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getCateMeals } from "../../Redux/CateMealsSlice/CateMealsSlice";
import { useEffect } from "react";

const CateMeals = () => {
  const { cateMeals, loading, error } = useSelector((state) => state.cateMeals);
  const { category } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCateMeals(category));
  // }, [dispatch]);
  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <LoadingSpinner />
        </div>
      ) : (
        cateMeals?.map((meal) => (
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

export default CateMeals;
