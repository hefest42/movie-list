import React, { useRef } from "react";

const LabelInput = ({ name, title }) => {
    const inputRef = useRef();

    const inputHandler = () => {
        console.log(inputRef.current.name);
    };

    return (
        <div>
            <label htmlFor={name}>{title}</label>
            <input type="checkbox" name={name} id={name} ref={inputRef} onClick={inputHandler} />
        </div>
    );
};

export default LabelInput;
