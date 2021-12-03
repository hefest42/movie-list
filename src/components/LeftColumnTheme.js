import React from "react";

const LeftColumnTheme = () => {
    return (
        <div className="left-column__theme">
            <div className="theme-title">Light/Dark</div>
            <div class="switch-wrapper">
                <label>
                    <input class="switch" type="checkbox" />
                    <div>
                        <div></div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default LeftColumnTheme;
