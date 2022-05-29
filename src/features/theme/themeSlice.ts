import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from './theme.types';

const initialState: ThemeState = {
  color: 'light'
};

const themeSlice = createSlice({
  name: "@@theme",
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.color = action.payload
    }
  },
});

export const themeReducer = themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
