/*

    This is for version 2 

*/


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/style.css";

const AuthContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isSignIn = location.pathname === "/signin";

    return (
        <div className="flex justify-center items-center mt-20">
            <div className={`container ${isSignIn ? "" : "right-panel-active"}`}>
                {/* Sign In Form */}
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign In</button>
                    </form>
                </div>

                {/* Sign Up Form */}
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Sign Up</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>

                {/* Overlay */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To stay connected, please sign in.</p>
                            <button className="ghost" onClick={() => navigate("/signin")}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your details to sign up.</p>
                            <button className="ghost" onClick={() => navigate("/signup")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;
