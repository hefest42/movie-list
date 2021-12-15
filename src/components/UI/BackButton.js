import React from "react";

import { resetMovieSearch } from "../../store/movieSearch-slice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const BackButton = () => {
    const dispatch = useDispatch();

    // const resetButtonHandler = () => {
    //     dispatch(resetMovieSearch());
    // };

    return (
        <Link to={`/movies`}>
            <div className="home-button home-button__active">
                <div>&#8249;</div>
            </div>
        </Link>
    );
};

export default BackButton;
