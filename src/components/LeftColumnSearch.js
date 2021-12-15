import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    setSearchTerm,
    filterMoviesWithSearchTerm,
    resetMovieSearch,
    setDisplayResetButton,
} from "../store/movieSearch-slice";

const LeftColumnSearch = () => {
    const dispatch = useDispatch();
    const searchRef = useRef();
    const resetButtonDisplay = useSelector((state) => state.movieSearch.displayResetButton);

    const searchFormHandler = (e) => {
        e.preventDefault();
        const searchTermValue = searchRef.current.value;

        if (searchTermValue === "") return;

        dispatch(setDisplayResetButton(true));

        dispatch(setSearchTerm(searchTermValue));
        dispatch(filterMoviesWithSearchTerm());

        searchRef.current.value = "";
    };

    const resetButtonHandler = () => {
        dispatch(setDisplayResetButton(false));
        dispatch(resetMovieSearch());
    };

    return (
        <form className="left-column__search" onSubmit={searchFormHandler}>
            <input type="text" placeholder="Search..." ref={searchRef} />
            <div>
                <button>Search</button>
                {resetButtonDisplay && <button onClick={resetButtonHandler}>Reset Search</button>}
            </div>
        </form>
    );
};

export default LeftColumnSearch;
