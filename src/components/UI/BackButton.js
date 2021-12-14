import React from "react";

import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <Link to={`/movies`}>
            <button className="home-button">&#8249;</button>;
        </Link>
    );
};

export default BackButton;
