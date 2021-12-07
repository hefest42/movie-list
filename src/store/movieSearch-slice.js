import { createSlice } from "@reduxjs/toolkit";

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: {},
    reducers: {},
});

export const movieSearchActions = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
