import React, { useState } from "react";

import LeftColumnTitle from "./LeftColumnTitle";
import LeftColumnSearch from "./LeftColumnSearch";
import LeftColumnGenres from "./LeftColumnGenres";
import LeftColumnTheme from "./LeftColumnTheme";
import MoviePoster from "./MoviePoster";

import { movieList } from "../store/movieList";

const AppContainer = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    //changing light/dark mode
    const darkModeHandler = () => {
        setDarkMode((state) => !state);
    };

    const allGenreList = [...new Set(movieList.map((movie) => movie.genre).flat())]; //getting all the unique genres, and putting them in array

    console.log(allGenreList);

    return (
        <div className={!darkMode ? "container" : "container-dark"}>
            <div className="container-left">
                <LeftColumnTitle />
                <LeftColumnSearch />
                <LeftColumnGenres genres={allGenreList} />
                <LeftColumnTheme changeMode={darkModeHandler} />
            </div>

            <div className="container-right">
                {movieList.map((movie) => (
                    <MoviePoster key={movie.id} posterLink={movie.links.poster} movieTitle={movie.name} />
                ))}
            </div>
        </div>
    );
};

export default AppContainer;
