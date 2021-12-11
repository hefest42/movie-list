import AppContainer from "./components/AppContainer";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/movies" />} />
                <Route path="/movies" element={<AppContainer />} />
            </Routes>
        </div>
    );
}

export default App;
