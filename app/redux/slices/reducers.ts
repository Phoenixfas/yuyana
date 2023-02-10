import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import menuToggleReducer from "./menuToggleSlice";
import locationReducer from "./locationSlice";
import locationToggleReducer from "./locationToggleSlice";
import galleryToggleReducer from "./galleryToggleSlice";
import activeImageReducer from "./activeImageSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  menuToggle: menuToggleReducer,
  location: locationReducer,
  locationToggle: locationToggleReducer,
  galleryToggle: galleryToggleReducer,
  activeImage: activeImageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
