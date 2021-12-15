import React from "react";

import BackButton from "./UI/BackButton";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <p>Sorry, we couldn't find the movie you're looking for. Please try again.</p>
            <BackButton />
        </div>
    );
};

export default ErrorPage;
