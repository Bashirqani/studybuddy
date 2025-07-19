import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await API.post("/auth/register", { username, email, password });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create your StudyBuddy account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

