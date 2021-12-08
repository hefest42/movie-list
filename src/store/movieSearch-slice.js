import { createSlice } from "@reduxjs/toolkit";

import { movieList } from "./movieList";

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: {
        movies: movieList,
        searchedForMovies: [],
        checkedGenres: [],
        searchTerm: "",
        testMovies: [],
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
        filterMoviesWithSearchTerm(state) {
            const searchByActor = movieList.filter((movie) => movie.actors.includes(state.searchTerm));
            const searchByDirector = movieList.filter((movie) => movie.director.includes(state.searchTerm));
            const searchByWriter = movieList.filter((movie) => movie.writers.includes(state.searchTerm));

            console.log(searchByDirector);
        },
    },
});

export const { getCheckedGeneres, removeCheckedGenres, setSearchTerm, filterMoviesWithSearchTerm } =
    movieSearchSlice.actions;

export default movieSearchSlice.reducer;
