import React from "react";
import {Routes, Route} from 'react-router-dom'
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";


const MainContainer = () => {
    return (
        <div id="main-section">
            <Routes>
                <Route path='/blue' element={<Blue />} />
                <Route path='/red' element={<Red />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default MainContainer;