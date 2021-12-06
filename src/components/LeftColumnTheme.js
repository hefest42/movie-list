import React from "react";

const LeftColumnTheme = ({ changeMode }) => {
    return (
        <div className="left-column__theme">
            <div className="theme-title">Light/Dark</div>
            <input id="s1d" type="checkbox" className="switch" onClick={changeMode} />
        </div>
    );
};

export default LeftColumnTheme;
