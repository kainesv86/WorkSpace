import { createSlice } from "@reduxjs/toolkit";
import { ChoicesState } from "./dto";

const initialState: ChoicesState = {
        location: 0,
        solution: 0,
};

export const choicesState = createSlice({
        name: "user",
        initialState,
        reducers: {
                changeLocation: (state, action) => {
                        state.location = action.payload;
                },
                changeSolution: (state, action) => {
                        state.solution = action.payload;
                },
        },
});

export const { changeLocation, changeSolution } = choicesState.actions;

export default choicesState.reducer;
