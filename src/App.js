import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/HomePage/Home";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import SlideShow from "./Components/LoginSignup/SlideShow";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<>
                        <SlideShow />
                        <LoginSignup />
                    </>} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

