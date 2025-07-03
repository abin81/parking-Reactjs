import React, { useState } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="login-container">
        <h1 className="login-title">
          <i className="fas fa-parking"></i> Smart Parking
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-login">
              Login
            </button>
          </div>
        </form>
        <p className="register-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
