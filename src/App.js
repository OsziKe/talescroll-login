import React from 'react';
import './App.css';
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import SlideShow from "./Components/LoginSignup/SlideShow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/HomePage/Home";

function App() {
    return (
        <Router>
            <div>
                <SlideShow />
                <Routes>
                    <Route path="/" element={<LoginSignup />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
