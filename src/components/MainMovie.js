import React from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const MainMovie = () => {
    window.scrollTo(0, 0);

    const params = useParams();
    const movies = useSelector((state) => state.movieSearch.movies);

    const [mainMovie] = movies.filter(
        (movie) =>
            movie.name
                .replace(/[^a-z\d\s]+/gi, "")
                .replace(/\s+/g, " ")
                .toLowerCase() === params.movieName.split("-").join(" ").toLowerCase()
    );

    const { imdb, rottenTomatoes } = mainMovie.links;

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
                <div className="info-container__summary">{mainMovie.summary}</div>

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
                <ul className="info_container__actors">
                    {mainMovie.actors.map((actor, i) => (
                        <li key={i}>{actor}</li>
                    ))}
                </ul>

                <h1>LINKS</h1>
                <div className="info-container__links">
                    <a href={imdb} target="_blank" rel="noreferrer">
                        imdb
                    </a>
                    <a href={rottenTomatoes} target="_blank" rel="n noreferrer">
                        Rotten Tomatoes
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainMovie;
