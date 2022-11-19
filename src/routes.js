import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import App from "./App";
import Logs from "./Logs";

const Routess = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/logs" element={<Logs />} />
            </Routes>
        </Router>
    );
};

export default Routess;