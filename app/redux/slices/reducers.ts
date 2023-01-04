import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import menuToggleReducer from "./menuToggleSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  menuToggle: menuToggleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
