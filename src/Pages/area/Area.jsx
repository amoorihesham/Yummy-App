import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAreas } from "../../Redux/Area_Slice/AreaSlice";
import { Link } from "react-router-dom";

const Area = () => {
  const { areas, error, loading } = useSelector((state) => state.areas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAreas());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        areas?.map((area) => (
          <div className="col-md-4" key={area.strArea}>
            <Link to={`/area/${area.strArea}`}>
              {" "}
              <div className="box text-center bg-secondary p-2 position-relative">
                <img
                  src="https://amoorihesham.github.io/Yummy-Project/imgs/earthplanet.svg"
                  alt={area.strArea}
                  className="w-100"
                  loading="lazy"
                />
                <div className="layer position-absolute">
                  <h4>{area.strArea}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default Area;
