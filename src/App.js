import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Categories from "./Pages/categories/Categories";
import Layout from "./Layout/Layout";
import Home from "./Pages/home/Home";
import Area from "./Pages/area/Area";
import Ingrediants from "./Pages/ingrediants/Ingrediants";
import ContactUs from "./Pages/contact/ContactUs";
import MealDetails from "./Pages/mealDetails/MealDetails";
import CateMeals from "./Pages/cateMeals/CateMeals";
import AreaMeals from "./Pages/areaMeals/AreaMeals";
import IngrediantsMeals from "./Pages/ingrediantMeals/IngrediantsMeals";
import Search from "./Pages/search/Search";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/categories", element: <Categories /> },
        { path: "/categories/:category", element: <CateMeals /> },
        { path: "/area", element: <Area /> },
        { path: "/area/:area", element: <AreaMeals /> },
        { path: "/ingrediants", element: <Ingrediants /> },
        { path: "/ingrediants/:ingrediant", element: <IngrediantsMeals /> },
        { path: "/search", element: <Search /> },
        { path: "/:id", element: <MealDetails /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);
  return (
    <div className="App bg-dark">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
