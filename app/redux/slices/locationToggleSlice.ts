import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface LocationToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: LocationToggleState = {
  value: true,
};

export const locationToggleSlice = createSlice({
  name: "locationToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleLocation: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleLocation } = locationToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLocationToggle = (state: RootState) =>
  state.locationToggle.value;

export default locationToggleSlice.reducer;
