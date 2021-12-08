import { createSlice } from "@reduxjs/toolkit";

import { movieList } from "./movieList";

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: {
        movies: movieList,
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
            const term = action.payload
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

            state.searchTerm = term;
        },
        filterMoviesWithSearchTerm(state) {
            const searchByName = movieList.filter((movie) => movie.name === state.searchTerm);
            const searchByActor = movieList.filter((movie) => movie.actors.includes(state.searchTerm));
            const searchByDirector = movieList.filter((movie) => movie.director.includes(state.searchTerm));
            const searchByWriter = movieList.filter((movie) => movie.writers.includes(state.searchTerm));

            const combinedSearchedResults = [
                ...new Set(searchByName.concat(searchByActor).concat(searchByDirector).concat(searchByWriter)),
            ];

            console.log(combinedSearchedResults);

            state.movies = combinedSearchedResults;
        },

        resetMovieSearch(state) {
            state.movies = movieList;
        },
    },
});

export const { getCheckedGeneres, removeCheckedGenres, setSearchTerm, filterMoviesWithSearchTerm } =
    movieSearchSlice.actions;

export default movieSearchSlice.reducer;
