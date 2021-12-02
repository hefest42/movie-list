import React from "react";

const LeftColumnSearch = () => {
    return (
        <form className="left-column__search">
            <input type="text" placeholder="Search..." />
            <div>
                <button>Search</button>
                {/* <button>Reset</button> */}
            </div>
        </form>
    );
};

export default LeftColumnSearch;
