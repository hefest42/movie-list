import React from "react";

import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <Link to={`/movies`}>
            <div className="home-button home-button__active">
                <div>&#8249;</div>
            </div>
        </Link>
    );
};

export default BackButton;
