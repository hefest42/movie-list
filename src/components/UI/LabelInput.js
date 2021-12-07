import React from "react";

const LabelInput = ({ name, title }) => {
    return (
        <div>
            <label htmlFor={name}>{title}</label>
            <input type="checkbox" name={name} id={name} />
        </div>
    );
};

export default LabelInput;
