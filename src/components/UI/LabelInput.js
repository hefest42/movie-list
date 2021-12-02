import React from "react";

// CHANGE THIS LATER TO A CUSTOM CHECKBOX(USE A DIFFRENT BRANCH)

const LabelInput = ({ name, title }) => {
    return (
        <div>
            <label htmlFor={name}>{title}</label>
            <input type="checkbox" name={name} id={name} />
        </div>
    );
};

export default LabelInput;
