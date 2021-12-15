import AppContainer from "./components/AppContainer";
import MainMovie from "./components/MainMovie";
import ErrorPage from "./components/ErrorPage";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/movies" />} />
                <Route path="/movies" element={<AppContainer />} />
                <Route path="/movies/:movieName" element={<MainMovie />} />
                <Route path="/error-page" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
