import React from "react";

import LeftColumnTitle from "./LeftColumnTitle";

const AppContainer = (props) => {
    return (
        <div className="container">
            <div className="container-left">
                <LeftColumnTitle />
            </div>
            <div className="container-right">test2</div>
        </div>
    );
};

export default AppContainer;
