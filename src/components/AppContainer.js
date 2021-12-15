import React, { useState } from "react";

import LeftColumnTitle from "./LeftColumnTitle";
import LeftColumnSearch from "./LeftColumnSearch";
import LeftColumnGenres from "./LeftColumnGenres";
import LeftColumnTheme from "./LeftColumnTheme";
import MoviePoster from "./MoviePoster";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "../store/movieSearch-slice";

const compareTwoArrays = (arr1, arr2) => {
    return arr2.every((value) => arr1.includes(value));
};

const AppContainer = () => {
    const filterValues = useSelector((state) => state.movieSearch.checkedGenres);
    const darkMode = useSelector((state) => state.movieSearch.darkTheme);
    const MOVIES = useSelector((state) => state.movieSearch.movies);
    const dispatch = useDispatch();

    //changing light/dark mode
    const darkModeHandler = () => {
        dispatch(setDarkTheme());
    };

    const filteredOutMovies = MOVIES.filter((movie) => compareTwoArrays(movie.genre, filterValues)); // filtering depending on which checkboxes are clicked

    const allGenreList = [
        ...new Set(
            filteredOutMovies
                .map((movie) => movie.genre)
                .flat()
                .sort((a, b) => a.localeCompare(b))
        ),
    ]; //getting all the unique genres, and putting them in alphabetical order

    return (
        <div className={!darkMode ? "container" : "container-dark"}>
            <div className="container-left">
                <LeftColumnTitle />
                <LeftColumnSearch />
                <LeftColumnGenres genres={allGenreList} />
                <LeftColumnTheme changeMode={darkModeHandler} />
            </div>

            <div className="container-right">
                {filteredOutMovies.map((movie) => (
                    <MoviePoster key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default AppContainer;
