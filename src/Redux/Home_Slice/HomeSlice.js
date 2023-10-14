import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHome = createAsyncThunk("getHomeSlice/getHome", async () => {
  const request = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const meals = await request.json();

  return meals.meals;
});

const initialState = {
  meals: [],
  loading: false,
  error: null,
};

export const getHomeSlice = createSlice({
  name: "getHomeSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHome.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getHome.fulfilled, (state, action) => {
      state.loading = false;
      state.meals = action.payload;
    });
    builder.addCase(getHome.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getHomeSlice.reducer;
