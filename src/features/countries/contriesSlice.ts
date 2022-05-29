import { createSlice } from "@reduxjs/toolkit";
import { CountriesState } from './countries.types';
import { loadCountries } from "./countriesThunks";

const initialState: CountriesState = {
  entities: [],
  status: "idle",
  error: null,
};

const countriesSlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.entities = action.payload;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        if (action.payload) {
          state.error = action.payload;
        } else if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
