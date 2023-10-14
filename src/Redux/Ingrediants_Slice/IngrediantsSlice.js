import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getIngrediants = createAsyncThunk(
  "getIngrediantsSlice/getIngrediants",
  async () => {
    const request = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    const ingrediants = await request.json();

    return ingrediants.meals;
  }
);

const initialState = {
  ingrediants: [],
  loading: false,
  error: null,
};

export const getIngrediantsSlice = createSlice({
  name: "getIngrediantsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIngrediants.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getIngrediants.fulfilled, (state, action) => {
      state.loading = false;
      state.ingrediants = action.payload;
    });
    builder.addCase(getIngrediants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getIngrediantsSlice.reducer;
