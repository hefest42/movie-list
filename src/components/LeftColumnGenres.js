import React from "react";

import LabelInput from "./UI/LabelInput";

const LeftColumnInputs = ({ genres }) => {
    return (
        <div className="left-column__inputs">
            {genres.map((genre) => (
                <LabelInput key={genre} name={genre} title={genre} />
            ))}
        </div>
    );
};

export default LeftColumnInputs;
