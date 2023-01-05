import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import menuToggleReducer from "./menuToggleSlice";
import locationReducer from "./locationSlice";
import locationToggleReducer from "./locationToggleSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  menuToggle: menuToggleReducer,
  location: locationReducer,
  locationToggle: locationToggleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
