import "./layout.css";
import Navbar from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mainPage d-flex">
      <Navbar />
      <div className="mainContent py-3">
        <div className="container">
          <div className="row g-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
