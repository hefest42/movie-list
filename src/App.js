import AppContainer from "./components/AppContainer";
import MainMovie from "./components/MainMovie";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/movies" />} />
                <Route path="/movies" element={<AppContainer />} />
                <Route path="/movies/:movieName" element={<MainMovie />} />
            </Routes>
        </div>
    );
}

export default App;
