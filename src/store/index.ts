import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./myRandomNumberSlice";

export const store = configureStore({
    reducer: {
        my: myReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;