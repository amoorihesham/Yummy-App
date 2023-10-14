import { useEffect } from "react";
import { getCategories } from "../../Redux/meals_categories/mealsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./cate.css";
import CategoriesCard from "../../components/CategoryiesCard/CategoriesCard";

const Categories = () => {
  const { categories, error, loading } = useSelector(
    (state) => state.categories
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        categories?.map((cate) => (
          <div className="col-md-4" key={cate.idCategory}>
            <CategoriesCard cate={cate} />
          </div>
        ))
      )}
    </>
  );
};

export default Categories;
