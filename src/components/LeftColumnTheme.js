import React from "react";

import { useSelector } from "react-redux";

const LeftColumnTheme = ({ changeMode }) => {
    const darkMode = useSelector((state) => state.movieSearch.darkTheme);

    return (
        <div className="left-column__theme">
            <div className="theme-title">Light/Dark</div>
            <input id="s1d" type="checkbox" className="switch" onClick={changeMode} defaultChecked={darkMode} />
        </div>
    );
};

export default LeftColumnTheme;
