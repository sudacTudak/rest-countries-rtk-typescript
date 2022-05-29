import { createAsyncThunk } from "@reduxjs/toolkit";
import { IExtraParams } from '../../store';
import { Country } from '../../types/country.types';

export const loadCountries = createAsyncThunk<
    Country[],
    undefined,
    {
      rejectValue: string,
      extra: IExtraParams
    }
>
(
  "@@countries/loadCountries",
  async (_, { rejectWithValue, extra: { client, API } }) => {
    try {
      const { data } = await client.get(API.ALL_COUNTRIES);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
)
