import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import "../src/assets/scss/style.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
