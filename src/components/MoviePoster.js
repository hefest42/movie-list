import React from "react";

import { movieList } from "../store/movieList";

const MoviePoster = () => {
    return (
        <div className="poster-container">
            <img
                src="https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_FMjpg_UX1000_.jpg"
                alt="https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_FMjpg_UX1000_.jpg"
            ></img>
        </div>
    );
};

export default MoviePoster;
