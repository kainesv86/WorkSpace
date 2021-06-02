import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/";

import { UserState } from "./user/dto";

export interface RootState {
        user: UserState;
}

export const store = configureStore({
        reducer: {
                user: userReducer,
        },
});
