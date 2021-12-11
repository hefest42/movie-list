import React, { useState } from "react";
import { Link } from "react-router-dom";

const MoviePoster = ({ posterLink, movieTitle }) => {
    const [posterActive, setPosterActive] = useState(false);
    const movieLinkTitle = movieTitle
        .replace(/[^a-z\d\s]+/gi, "")
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .join("-");
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
                <Link to={`${movieLinkTitle}`}>
                    <img src={posterLink} alt={`${movieTitle} poster`} />{" "}
                </Link>
            </div>

            <div className={!posterActive ? "poster-title" : "poster-title poster-title-active"}>{movieTitle}</div>
        </div>
    );
};

export default MoviePoster;
