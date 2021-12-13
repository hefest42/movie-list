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

    return (
        <div className="main-movie__container">
            <div className="info-container">
                <img src={mainMovie.links.poster} alt={`${mainMovie.name}'s poster`} />
                <div className="info-container__title">{mainMovie.name}</div>
                <div className="info-container__genres">
                    {mainMovie.genre.map((g, i) => (
                        <div key={i}>{g}</div>
                    ))}
                </div>

                <h1>SUMMARY</h1>
                <div>{mainMovie.summary}</div>

                <h1>DIRECTORS</h1>
                <div className="info-container__director">
                    {mainMovie.director.map((dir, i) => (
                        <div key={i}>{dir}</div>
                    ))}
                </div>

                <h1>WRITERS</h1>
                <div className="info-container__writers">
                    {mainMovie.writers.map((dir, i) => (
                        <div key={i}>{dir}</div>
                    ))}
                </div>

                <h1>ACTORS</h1>
                <ul className="info_container_actors">
                    {mainMovie.actors.map((actor, i) => (
                        <li key={i}>{actor}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MainMovie;
