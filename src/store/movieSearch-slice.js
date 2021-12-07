import { createSlice } from "@reduxjs/toolkit";

import { movieList } from "./movieList";

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: {
        allMovies: movieList,
        filteredMovies: [],
    },
    reducers: {},
});

export const movieSearchActions = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
