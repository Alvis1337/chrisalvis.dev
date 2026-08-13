import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: boolean = true;

export const themeState = createSlice({
    name: "themeState",
    initialState,
    reducers: {
        setDarkTheme: (_state, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
});

export const {setDarkTheme} = themeState.actions;

export default themeState.reducer;
