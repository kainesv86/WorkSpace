import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/";
import choicesReducer from "./choices/";

import { UserState } from "./user/dto";
import { ChoicesState } from "./choices/dto";

export interface RootState {
        user: UserState;
        choices: ChoicesState;
}

export const store = configureStore({
        reducer: {
                user: userReducer,
                choices: choicesReducer,
        },
});
