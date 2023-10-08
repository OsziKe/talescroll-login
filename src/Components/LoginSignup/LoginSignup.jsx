import React, { useState } from 'react';
import './LoginSignup.css';
import google_icon from '../Assets/icons8-google-144.png';
import facebook_icon from '../Assets/icons8-facebook-144.png';
import logo from '../Assets/withoutbg.png';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider, signInWithPopup, createUser, signIn } from './firebase';

function LoginSignup(props) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isRegister, setIsRegister] = useState(true);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setIsRegister(!isRegister);
        // Zresetuj komunikaty o błędach
        setEmailError('');
        setPasswordError('');
    };

    const handleGoogleAction = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFacebookAction = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEmailAction = async () => {
        try {
            const result = isRegister
                ? await createUser(auth, email, password)
                : await signIn(auth, email, password);

            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error(error);
            setEmailError(error.message);
            setPasswordError('');
        }
    };

    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="inputs">
                    {showLoginForm ? (
                        <>
                            <p>E-mail</p>
                            <div className="input" placeholder="Enter your email here">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email here"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <p className="error-message">{emailError}</p>
                            <p>Password</p>
                            <div className="input" placeholder="Enter your password here">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    onChange={(e) => setPassword(e.target.value)}
                                    minLength="6"
                                    maxLength="20"
                                />
                            </div>
                            <p className="error-message">{passwordError}</p>
                        </>
                    ) : (
                        <>
                            <p>Name</p>
                            <div className="input" placeholder="Enter your name here">
                                <input type="text" placeholder="Enter your name here" />
                            </div>
                            <p>E-mail</p>
                            <div className="input" placeholder="Enter your email here">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email here"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <p className="error-message">{emailError}</p>
                            <p>Password</p>
                            <div className="input" placeholder="Enter your password here">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <p className="error-message">{passwordError}</p>
                        </>
                    )}
                </div>
                <div className="submit-container">
                    <div className="submit">
                        <button id="google-login-button" onClick={handleGoogleAction} id="iconbutton">
                            <div className="button-content">
                                <img src={google_icon} alt="" className="icon" />
                                {isRegister ? 'Register with Google' : 'Login with Google'}
                            </div>
                        </button>
                    </div>
                    <div className="submit">
                        <button id="facebook-login-button" onClick={handleFacebookAction} id="iconbutton">
                            <div className="button-content">
                                <img src={facebook_icon} alt="" className="icon" />
                                {isRegister ? 'Register with Facebook' : 'Login with Facebook'}
                            </div>
                        </button>
                    </div>
                    <div className="submit">
                        <button id="sign-up-button" onClick={handleEmailAction}>
                            {isRegister ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
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