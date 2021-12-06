import React, { useState } from "react";

const MoviePoster = ({ posterLink }) => {
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
                <img src={posterLink} alt="test" />
            </div>

            <div className={!posterActive ? "poster-title" : "poster-title poster-title-active"}>Movie Title</div>
        </div>
    );
};

export default MoviePoster;
