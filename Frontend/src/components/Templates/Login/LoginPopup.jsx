import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const LoginDialog = ({ onClose, setAuth }) => {
  const [newUser, setNewUser] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    setNewUser(true);
  };

  const handleLoginClick = () => {
    if (!newUser && username === "hackout2023" && password === "hackout@123") {
      setAuth(true);
      
      onClose();
      
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-box">
        <div className="signup-header-form">
          <div className="text-primary item-center justify-center">
            <FaUser style={{ fontSize: "110px" }} />
          </div>
        </div>
        <div className="signup-body-form">
          <form>
            <div className="signup-input-group mb-3">
              <div className="signup-input-group-prepend">
                <span className="signup-input-group-text">
                  <FaUser />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="signup-input-group mb-3">
              <div className="signup-input-group-prepend">
                <span className="signup-input-group-text">
                  <FaLock />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder={newUser ? "Set Password" : "Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {newUser ? (
              <button
                type="button"
                className="signup font-semibold border-2 border-secondaryLight px-9 py-2 rounded-md"
                onClick={onClose}
              >
                SIGN UP
              </button>
            ) : (
              <button
                type="button"
                className="signup font-semibold border-2 border-secondaryLight px-9 py-2 rounded-md"
                onClick={handleLoginClick}
              >
                LOGIN
              </button>
            )}
            <div className="signup-message">
              <div className="paddingSignup">
                <input type="checkbox" /> Remember ME
              </div>
              {!newUser && (
                <div
                  className="paddingSignup signUpButton"
                  style={{ display: "flex", flexDirection: "row" }}
                  onClick={handleSignUpClick}
                >
                  <p>Don't have an account yet? </p>
                  <p> Sign up!</p>
                </div>
              )}
            </div>
          </form>
          <div className="flex items-start justify-center">
            <div className="bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2">
              <FaFacebookF className="text-[#080809] text-xl" />
            </div>
            <div className="bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2">
              <AiFillInstagram className="text-[#080809] text-xl" />
            </div>
            <div className="bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2">
              <AiOutlineTwitter className="text-[#080809] text-xl" />
            </div>
          </div>
        </div>

        <div className="mt-4 text-right">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
