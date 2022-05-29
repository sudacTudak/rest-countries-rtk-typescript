import { createAsyncThunk } from "@reduxjs/toolkit";
import { IExtraParams } from '../../store';
import { Country } from '../../types/country.types';
import { CountryDetails } from '../../types/details.types';

export const loadCountryByName = createAsyncThunk<
  CountryDetails,
  string,
  {
    rejectValue: string,
    extra: IExtraParams
  }
>(
  "@@details/loadCountryByName",
  async (name, { rejectWithValue, extra: { client, API } }) => {
    try {
      const { data } = await client.get(API.searchByCountry(name));
      return data[0];
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loadNeighborsByBorder = createAsyncThunk<
  Country[],
  string[],
  {
    rejectValue: string,
    extra: IExtraParams
  }
>(
  "@@details/loadNeighborsByBorder",
  async (codes = [], { rejectWithValue, extra: { client, API } }) => {
    try {
      const { data } = await client.get(API.filterByCode(codes));
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
