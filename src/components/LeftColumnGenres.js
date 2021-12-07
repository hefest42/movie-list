import React from "react";

import LabelInput from "./UI/LabelInput";

const LeftColumnInputs = ({ genres }) => {
    return (
        <div className="left-column__inputs">
            {genres.map((genre, i) => (
                <LabelInput key={i} name={genre} title={genre} />
            ))}
        </div>
    );
};

export default LeftColumnInputs;
