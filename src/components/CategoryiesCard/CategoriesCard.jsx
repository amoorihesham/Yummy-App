import "./cateCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCateMeals } from "../../Redux/CateMealsSlice/CateMealsSlice";

const CategoriesCard = ({
  cate: { strCategoryThumb, strCategory, strCategoryDescription },
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="box text-center bg-secondary p-2 position-relative"
      onClick={() => {
        dispatch(getCateMeals(strCategory));
        navigate(`/categories/${strCategory}`);
      }}
    >
      <img
        src={strCategoryThumb}
        alt={strCategory}
        className="w-100"
        loading="lazy"
      />
      <div className="layer position-absolute">
        <h4>{strCategory}</h4>
        <p className="text-trncate-me">{strCategoryDescription}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
