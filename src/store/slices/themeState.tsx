import {createSlice} from "@reduxjs/toolkit";

export interface ThemeState {
    darkTheme: string;
}

const initialState: ThemeState = {
    darkTheme: 'true',
};

export const themeState = createSlice({
    name: "themeState",
    initialState,
    reducers: {
        setDarkTheme: (state, action) => {
            if(state) {
                return state = action.payload;
            } else {
                return state = action.payload;
            }
        },
    },
});

export const {setDarkTheme} = themeState.actions;

export default themeState.reducer;