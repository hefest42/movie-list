import { createSlice } from "@reduxjs/toolkit";

import { movieList } from "./movieList";

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: {
        allMovies: movieList,
        checkedGenres: [],
    },
    reducers: {
        getCheckedGeneres(state, action) {
            state.checkedGenres.push(action.payload);
        },
        removeCheckedGenres(state, action) {
            state.checkedGenres = state.checkedGenres.filter((genre) => genre !== action.payload);
        },
    },
});

export const { getCheckedGeneres, removeCheckedGenres } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
