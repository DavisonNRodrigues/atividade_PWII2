import React from "react";
import {browserRouter, Routes, Route} from "react-router-dom";

export default function App() {
    return(

        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}