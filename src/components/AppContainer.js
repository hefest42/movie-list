import React, { useState } from "react";

import LeftColumnTitle from "./LeftColumnTitle";
import LeftColumnSearch from "./LeftColumnSearch";
import LeftColumnInputs from "./LeftColumnInputs";
import LeftColumnTheme from "./LeftColumnTheme";
import MoviePoster from "./MoviePoster";

import { movieList } from "../store/movieList";

const AppContainer = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    //changing light/dark mode
    const darkModeHandler = () => {
        setDarkMode((state) => !state);
    };

    return (
        <div className={!darkMode ? "container" : "container-dark"}>
            <div className="container-left">
                <LeftColumnTitle />
                <LeftColumnSearch />
                <LeftColumnInputs />
                <LeftColumnTheme changeMode={darkModeHandler} />
            </div>

            <div className="container-right">
                {movieList.map((movie) => (
                    <MoviePoster posterLink={movie.links.poster} movieTitle={movie.name} />
                ))}
            </div>
        </div>
    );
};

export default AppContainer;
