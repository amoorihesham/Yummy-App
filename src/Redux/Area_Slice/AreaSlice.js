import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAreas = createAsyncThunk("getAreasSlice/getAreas", async () => {
  const request = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const areas = await request.json();

  return areas.meals;
});

const initialState = {
  areas: [],
  loading: false,
  error: null,
};

export const getAreasSlice = createSlice({
  name: "getAreasSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAreas.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAreas.fulfilled, (state, action) => {
      state.loading = false;
      state.areas = action.payload;
    });
    builder.addCase(getAreas.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getAreasSlice.reducer;
