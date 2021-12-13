import React, { useState } from "react";

const MoviePoster = ({ movie }) => {
    const [posterActive, setPosterActive] = useState(false);

    return (
        <div className="poster-container">
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

            <div className={!posterActive ? "poster-title" : "poster-title poster-title-active"}>{movie.name}</div>
        </div>
    );
};

export default MoviePoster;
