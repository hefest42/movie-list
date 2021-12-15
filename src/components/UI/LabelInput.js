import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCheckedGeneres, removeCheckedGenres } from "../../store/movieSearch-slice";

const LabelInput = ({ name, title }) => {
    const dispatch = useDispatch();
    const generes = useSelector((state) => state.movieSearch.checkedGenres);
    const inputRef = useRef();

    const inputHandler = () => {
        if (!inputRef.current.checked) dispatch(removeCheckedGenres(inputRef.current.name));
        if (inputRef.current.checked) dispatch(getCheckedGeneres(inputRef.current.name));
    };

    return (
        <div>
            <label htmlFor={name}>{title}</label>
            <input
                type="checkbox"
                name={name}
                id={name}
                ref={inputRef}
                onClick={inputHandler}
                defaultChecked={generes.includes(name)}
            />
        </div>
    );
};

export default LabelInput;
