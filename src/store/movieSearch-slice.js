import { createSlice } from "@reduxjs/toolkit";

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: {
        searchedForMovies: [],
        checkedGenres: [],
        searchTerm: "",
    },
    reducers: {
        getCheckedGeneres(state, action) {
            state.checkedGenres.push(action.payload);
        },
        removeCheckedGenres(state, action) {
            state.checkedGenres = state.checkedGenres.filter((genre) => genre !== action.payload);
        },

        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

export const { getCheckedGeneres, removeCheckedGenres, setSearchTerm } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
