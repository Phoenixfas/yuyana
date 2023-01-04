import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface MenuToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: MenuToggleState = {
  value: false,
};

export const menuToggleSlice = createSlice({
  name: "menuToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleMenu } = menuToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMenuToggle = (state: RootState) => state.menuToggle.value;

export default menuToggleSlice.reducer;
