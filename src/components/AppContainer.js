import React, { useState } from "react";

import LeftColumnTitle from "./LeftColumnTitle";
import LeftColumnSearch from "./LeftColumnSearch";
import LeftColumnInputs from "./LeftColumnInputs";
import LeftColumnTheme from "./LeftColumnTheme";
import MoviePoster from "./MoviePoster";

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
                <MoviePoster
                    posterLink="https://m.media-amazon.com/images/M/MV5BOGUwZTEwZTYtZmQ0OS00NmM1LWE2ZTQtNjZiYmE4ZmUxMjk1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                    movieTitle=""
                />
                <MoviePoster
                    posterLink="https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_FMjpg_UX1000_.jpg"
                    movieTitle=""
                />
                <MoviePoster
                    posterLink="https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_.jpg"
                    movieTitle=""
                />
                <MoviePoster
                    posterLink="https://m.media-amazon.com/images/M/MV5BMDZjZWE0ZjktZjBlOS00YmFiLWFlYjctY2IwZmUxMzQyZjUyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
                    movieTitle=""
                />
                <MoviePoster
                    posterLink="https://m.media-amazon.com/images/M/MV5BOWUzYzBjNjAtN2RlNC00YWE5LThlMDEtMjhlOTQwYTY4NTlmXkEyXkFqcGdeQXVyMTI5Nzk4NDQ4._V1_FMjpg_UX1000_.jpg"
                    movieTitle=""
                />
            </div>
        </div>
    );
};

export default AppContainer;
