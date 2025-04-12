import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface myRandomNumberState {
    myRandomNumber: any;
}

const initialState: myRandomNumberState = {
    myRandomNumber: null,
};

const myRandomNumberSlice = createSlice({
    name: "myRandomNumberSlice",
    initialState,
    reducers: {
        setRandomNumber: (state, action: PayloadAction<number>) => {
            state.myRandomNumber = action.payload;
        },
    },
});

export const { setRandomNumber } = myRandomNumberSlice.actions;
export default myRandomNumberSlice.reducer;