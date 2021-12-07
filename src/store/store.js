import { configureStore } from "@reduxjs/toolkit";

import movieSearchSlice from "./movieSearch-slice";

const store = configureStore({
    reducer: {
        movieSearch: movieSearchSlice,
    },
});

export default store;
