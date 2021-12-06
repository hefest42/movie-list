import React, { useState } from "react";

const MoviePoster = ({ posterLink }) => {
    const [posterActive, setPosterActive] = useState(false);

    return (
        //prettier-ignore
        <div className="poster-container">
            <div className="poster">
                <img src={posterLink} alt="test" />
            </div>

            <div className="poster-title">Movie Title</div>
        </div>
    );
};

export default MoviePoster;
