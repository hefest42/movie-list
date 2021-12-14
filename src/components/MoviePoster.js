import React, { useState } from "react";

import { Link } from "react-router-dom";

const MoviePoster = ({ movie }) => {
    const [posterActive, setPosterActive] = useState(false);

    const movieLinkTitle = movie.name
        .replace(/[^a-z\d\s]+/gi, "")
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .join("-");

    return (
        <div className="poster-container">
            <Link to={`${movieLinkTitle}`}>
                <div
                    className={!posterActive ? "poster" : "poster poster-active"}
                    onMouseEnter={() => {
                        setPosterActive(true);
                    }}
                    onMouseLeave={() => {
                        setPosterActive(false);
                    }}
                >
                    <img src={movie.links.poster} alt={`${movie.name} poster`} />{" "}
                </div>
            </Link>

            <div className={!posterActive ? "poster-title" : "poster-title poster-title-active"}>{movie.name}</div>
        </div>
    );
};

export default MoviePoster;
