import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "getCategoriesSlice/getCategories",
  async () => {
    const request = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categories = await request.json();

    return categories.categories;
  }
);

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategoriesSlice = createSlice({
  name: "getCategoriesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getCategoriesSlice.reducer;
