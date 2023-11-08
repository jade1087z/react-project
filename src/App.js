import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import "../src/assets/scss/style.scss";
import { smooth } from "./assets/utils/smooth.js";
import { link } from "./assets/utils/link.js";

const App = () => {
    useEffect(() => {
        smooth();
        link();
    });
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
