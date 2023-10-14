import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCateMeals = createAsyncThunk(
  "getCateMealsSlice/getCateMeals",
  async (term) => {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`
    );
    const cateMeals = await request.json();

    return cateMeals.meals;
  }
);

const initialState = {
  cateMeals: [],
  loading: false,
  error: null,
};

export const getCateMealsSlice = createSlice({
  name: "getCateMealsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCateMeals.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCateMeals.fulfilled, (state, action) => {
      state.loading = false;
      state.cateMeals = action.payload;
    });
    builder.addCase(getCateMeals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getCateMealsSlice.reducer;
