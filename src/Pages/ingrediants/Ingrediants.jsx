import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngrediants } from "../../Redux/Ingrediants_Slice/IngrediantsSlice";
import { Link } from "react-router-dom";

const Ingrediants = () => {
  const { ingrediants, error, loading } = useSelector(
    (state) => state.ingrediants
  );
  const pagination = ingrediants.slice(0, 20);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngrediants());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        pagination?.map((ingredient) => (
          <div className="col-md-4" key={ingredient.idIngredient}>
            <Link to={`/ingrediants/${ingredient.strIngredient}`}>
              <div className="box text-center bg-secondary p-2 position-relative">
                <img
                  src="https://amoorihesham.github.io/Yummy-Project/imgs/ingrediants.jpg"
                  alt={ingredient.strIngredient}
                  className="w-100"
                  loading="lazy"
                />
                <div className="layer position-absolute">
                  <h4>{ingredient.strIngredient}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default Ingrediants;
