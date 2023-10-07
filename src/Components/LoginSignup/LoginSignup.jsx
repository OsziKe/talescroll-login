import React, { useState } from 'react';
import './LoginSignup.css';
import google_icon from '../Assets/icons8-google-144.png';
import facebook_icon from '../Assets/icons8-facebook-144.png';
import logo from '../Assets/withoutbg.png';
import { auth, googleProvider, signInWithPopup } from './firebase';
import { useNavigate } from 'react-router-dom';




function LoginSignup(props) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const navigate = useNavigate(); // Użyj hooka useNavigate do nawigacji

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleGoogleRegister = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {
                // Przekieruj na stronę "/home" po zalogowaniu
                navigate('/home'); // Upewnij się, że ścieżka jest zgodna z trasą w App.js
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <img src={logo} alt="" className="logo" />
                </div>
                {showLoginForm ? (
                    <div className="inputs">
                        <p>E-mail</p>
                        <div className="input" placeholder="Enter your email here">
                            <input type="email" placeholder="Enter your email here" />
                        </div>
                        <p>Password</p>
                        <div className="input" placeholder="Enter your password here">
                            <input type="password" placeholder="Enter your password here" />
                        </div>
                    </div>
                ) : (
                    <div className="inputs">
                        <p>Name</p>
                        <div className="input" placeholder="Enter your name here">
                            <input type="text" placeholder="Enter your name here" />
                        </div>
                        <p>E-mail</p>
                        <div className="input" placeholder="Enter your email here">
                            <input type="email" placeholder="Enter your email here" />
                        </div>
                        <p>Password</p>
                        <div className="input" placeholder="Enter your password here">
                            <input type="password" placeholder="Enter your password here" />
                        </div>
                        <div className="submit">
                            <button id="sign-in-button">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
                <div className="submit-container">
                    {showLoginForm ? (
                        <div className="submit2" onClick={toggleLoginForm} id="login-in-button">
                            Login
                        </div>
                    ) : (
                        <>
                            <div className="submit" >
                                <button id="google-login-button" onClick={handleGoogleRegister} id="iconbutton">
                                    <div className="button-content">
                                        <img src={google_icon} alt="" className="icon" />
                                        Register with Google
                                    </div>
                                </button>
                            </div>
                            <div className="submit">
                                <button id="facebook-login-button" id="iconbutton">
                                    <div className="button-content">
                                        <img src={facebook_icon} alt="" className="icon" />
                                        Register with Facebook
                                    </div>
                                </button>
                            </div>
                        </>
                    )}
                    <div className="forgot-password">
                        {showLoginForm
                            ? "Don't have an account? "
                            : "Already have an account? "}
                        <span onClick={toggleLoginForm} id="ihave">
                            {showLoginForm ? 'Register' : 'Login'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;





//pod przycisk z ikonka googla podlacz api googla do logowania