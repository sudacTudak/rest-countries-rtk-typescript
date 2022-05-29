import { createSlice } from "@reduxjs/toolkit";
import { DetailsState } from './details.types';
import { loadNeighborsByBorder, loadCountryByName } from "./detailsThunks";

const initialState: DetailsState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.currentCountry = action.payload;
        state.status = "received";
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected";
        if (action.payload) {
          state.error = action.payload;
        } else if (action.error.message) {
          state.error = action.error.message;
        }
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.map((country) => country.name);
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;
