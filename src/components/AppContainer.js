import React, { useState } from "react";

import LeftColumnTitle from "./LeftColumnTitle";
import LeftColumnSearch from "./LeftColumnSearch";
import LeftColumnGenres from "./LeftColumnGenres";
import LeftColumnTheme from "./LeftColumnTheme";
import MoviePoster from "./MoviePoster";

import { useSelector } from "react-redux";

const compareTwoArrays = (arr1, arr2) => {
    return arr2.every((value) => arr1.includes(value));
};

const AppContainer = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    const filterValues = useSelector((state) => state.movieSearch.checkedGenres);
    const MOVIES = useSelector((state) => state.movieSearch.movies);

    //changing light/dark mode
    const darkModeHandler = () => {
        setDarkMode((state) => !state);
    };

    const filteredOutMovies = MOVIES.filter((movie) => compareTwoArrays(movie.genre, filterValues)); // filtering depending on which checkboxes are clicked

    console.log(filteredOutMovies);

    const allGenreList = [
        ...new Set(
            filteredOutMovies
                .map((movie) => movie.genre)
                .flat()
                .sort((a, b) => a.localeCompare(b))
        ),
    ]; //getting all the unique genres, and putting them in array in alphabetical order

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
