import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./dto";

const initialState: UserState = {
        username: "kainesv",
        fullName: "Kainé Phạm",
        email: "kainesv86@gmail.com",
        isLogin: true,
};

export const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
                resetUser: () => ({ ...initialState }),
        },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
