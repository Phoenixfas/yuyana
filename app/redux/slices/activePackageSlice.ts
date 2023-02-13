import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define package state as an object with name, tour_ids, desc, content, and date
export interface Package {
    id: any;
    name: string;
    description: string;
    type: string;
    tour_ids: string[];
    total_no_of_days: number;
    price: number;
    keywords: string[];
}

// define initial state
const initialState: Package = {
    id: "",
    name: "",
    description: "",
    type: "",
    tour_ids: [],
    total_no_of_days: 0,
    price: 0,
    keywords: [],
};

// create slice
export const activePackageSlice = createSlice({
    name: "activePackage",
    initialState,
    reducers: {
        // define action to change active package

        // @ts-ignore
        changeActivePackage: (state, action: PayloadAction<Package>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.type = action.payload.type;
            state.tour_ids = action.payload.tour_ids;
            state.total_no_of_days = action.payload.total_no_of_days;
            state.price = action.payload.price;
            state.keywords = action.payload.keywords;
        },
    },
});


// export actions
export const { changeActivePackage } = activePackageSlice.actions;
// other code such as selectors can use the imported `RootState` type

export const selectActivePackage = (state: RootState) => state.activePackage;

// export reducer
export default activePackageSlice.reducer;
