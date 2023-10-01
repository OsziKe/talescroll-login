import React, { useState } from 'react';
import './LoginSignup.css';

import facebook_icon from '../Assets/icons8-facebook-144.png';
import google_icon from '../Assets/icons8-google-144.png';
import logo from '../Assets/withoutbg.png';

function LoginSignup(props) {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
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
                        <div className="submit2" onClick={toggleLoginForm}>
                            Login
                        </div>
                    ) : (
                        <>
                            <div className="submit">
                                <button id="google-login-button">
                                    <div className="button-content">
                                        <img src={google_icon} alt="" className="icon" />
                                        Register with Google
                                    </div>
                                </button>
                            </div>
                            <div className="submit">
                                <button id="facebook-login-button">
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
                        <span onClick={toggleLoginForm}>
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