import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`aside ${isOpen ? "open" : ""}`}>
      <div className="slider d-flex flex-column justify-content-between ">
        <ul className="links list-unstyled p-0 m-0">
          <Link to={"/search"}>
            <li
              className="search position-relative"
            >
              Search
            </li>
          </Link>
          
          <Link to={"/categories"}>
            <li
              className="category position-relative"
              onClick={() => setIsOpen(false)}
            >
              Category
            </li>
          </Link>
          <Link to={"/area"}>
            <li
              className="area position-relative"
              onClick={() => setIsOpen(false)}
            >
              Area
            </li>
          </Link>
          <Link to={"/ingrediants"}>
            <li
              className="ingredients position-relative"
              onClick={() => setIsOpen(false)}
            >
              Ingredients
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className="position-relative contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </li>
          </Link>
        </ul>
        <div className="copyInfo">
          <ul className="list-unstyled p-0 m-0 d-flex gap-2">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-solid fa-globe"></i>
            </li>
            <li>
              <i className="fa-solid fa-share-nodes"></i>
            </li>
          </ul>
          <p>Copyright Â© 2019 All Rights Reserved.</p>
        </div>
      </div>
      <nav className="sideBox p-2 bg-white">
        <div>
          <Link to={"/"}>
            <img
              src="https://amoorihesham.github.io/Yummy-Project/imgs/logo.png"
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
        <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        <ul className="list-unstyled p-0 m-0">
          <li>
            <i className="fa-solid fa-globe"></i>
          </li>
          <li>
            <i className="fa-solid fa-share-nodes"></i>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
