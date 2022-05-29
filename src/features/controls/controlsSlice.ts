import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ControlsState, Regions } from './controls.types';


const initialState: ControlsState = {
  search: "",
  region: Regions.All,
};

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<keyof typeof Regions>) => {
      state.region = action.payload;
    },
    setAllControls: (_, action: PayloadAction<ControlsState>) => action.payload,
    clearControls: () => initialState,
  },
});

export const controlsReducer = controlsSlice.reducer;
export const { setSearch, setRegion, setAllControls, clearControls } =
  controlsSlice.actions;
