import { configureStore } from "@reduxjs/toolkit";

import popularSlice from "./Home_Slice/HomeSlice";
import categoriesSlice from "./meals_categories/mealsSlice";
import areasSlice from "./Area_Slice/AreaSlice";
import ingrediantsSlice from "./Ingrediants_Slice/IngrediantsSlice";
import cateMealsSlice from "./CateMealsSlice/CateMealsSlice";

export const store = configureStore({
  reducer: {
    populare: popularSlice,
    categories: categoriesSlice,
    areas: areasSlice,
    ingrediants: ingrediantsSlice,
    cateMeals: cateMealsSlice,
  },
});
