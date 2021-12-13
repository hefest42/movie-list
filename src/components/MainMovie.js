import React from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const MainMovie = () => {
    const params = useParams();
    const movies = useSelector((state) => state.movieSearch.movies);

    const [mainMovie] = movies.filter(
        (movie) =>
            movie.name.replace(/[^a-z\d\s]+/gi, "").toLowerCase() ===
            params.movieName.split("-").join(" ").toLowerCase()
    );

    console.log(mainMovie);

    return <div>{mainMovie.name}</div>;
};

export default MainMovie;
