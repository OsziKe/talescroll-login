// App.js
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
                    <Route path="/Login" element={<>
                        <SlideShow />
                        <LoginSignup />
                    </>} />
                    <Route path="/home" element={<Home />} /> {/* Nowa trasa dla strony głównej */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
