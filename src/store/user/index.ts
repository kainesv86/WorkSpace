import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./dto";

const initialState: UserState = {
        username: "kainesv",
        fullName: "Kainé Phạm",
        email: "kainesv86@gmail.com",
};

export const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
