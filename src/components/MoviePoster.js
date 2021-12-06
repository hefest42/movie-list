import React from "react";

import { movieList } from "../store/movieList";

const MoviePoster = () => {
    return <div>{movieList[0].links.poster}</div>;
};

export default MoviePoster;
