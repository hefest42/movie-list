import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { setSearchTerm, filterMoviesWithSearchTerm } from "../store/movieSearch-slice";

const LeftColumnSearch = () => {
    const dispatch = useDispatch();
    const searchRef = useRef();

    const searchFormHandler = (e) => {
        e.preventDefault();

        const searchTermValue = searchRef.current.value;
        dispatch(setSearchTerm(searchTermValue));
        dispatch(filterMoviesWithSearchTerm());

        searchRef.current.value = "";
    };

    return (
        <form className="left-column__search" onSubmit={searchFormHandler}>
            <input type="text" placeholder="Search..." ref={searchRef} />
            <div>
                <button>Search</button>
                {/* <button>Reset</button> */}
            </div>
        </form>
    );
};

export default LeftColumnSearch;
