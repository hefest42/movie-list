import React from "react";

import LeftColumnTitle from "./LeftColumnTitle";
import LeftColumnSearch from "./LeftColumnSearch";
import LeftColumnInputs from "./LeftColumnInputs";
import LeftColumnTheme from "./LeftColumnTheme";

const AppContainer = (props) => {
    return (
        <div className="container">
            <div className="container-left">
                <LeftColumnTitle />
                <LeftColumnSearch />
                <LeftColumnInputs />
                <LeftColumnTheme />
            </div>

            <div className="container-right">test2</div>
        </div>
    );
};

export default AppContainer;
