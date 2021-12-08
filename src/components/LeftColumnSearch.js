import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { setSearchTerm, filterMoviesWithSearchTerm, resetMovieSearch } from "../store/movieSearch-slice";

const LeftColumnSearch = () => {
    const [showResetButton, setShowResetButton] = useState(false);
    const dispatch = useDispatch();
    const searchRef = useRef();

    const searchFormHandler = (e) => {
        e.preventDefault();
        const searchTermValue = searchRef.current.value;

        if (searchTermValue === "") return;

        setShowResetButton(true);

        dispatch(setSearchTerm(searchTermValue));
        dispatch(filterMoviesWithSearchTerm());

        searchRef.current.value = "";
    };

    const resetButtonHandler = () => {
        setShowResetButton(false);
        dispatch(resetMovieSearch());
    };

    return (
        <form className="left-column__search" onSubmit={searchFormHandler}>
            <input type="text" placeholder="Search..." ref={searchRef} />
            <div>
                <button>Search</button>
                {showResetButton && <button onClick={resetButtonHandler}>Reset Search</button>}
            </div>
        </form>
    );
};

export default LeftColumnSearch;
