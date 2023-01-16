import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = (props) => {
  const [username, setUsername] = useState("thierrymarcelin");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setUsername(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = () => {
    if (username === "thierrymarcelin" && password === "marcelin") {
      setShowSuccess(true);
      setShowError(false);
      navigate(`/welcome/${username}`);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };
  return (
    <div className="login">
      <h1>Login to start</h1>
      {showSuccess && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showError && (
        <div className="errorMessage">
          Authentication Failed. Please check your credentials
        </div>
      )}
      <div className="loginForm">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
