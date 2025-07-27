import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      login(res.data.token); // Store the JWT from backend
      navigate("/Home");
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(message);
    }
  };

  return (
    <div className="w-screen h-screen bg-[url(./assets/images/login2.jpg)]">
      <img src="./src/assets/images/mafialogo.png" className="w-3/12 m-auto" />
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white rounded-md">
        <h1 className="text-3xl text-red-900 text-center font-bold font-serif">Login</h1>

        <input
          className="border-1 rounded-lg w-full my-3 text-lg p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="border-1 rounded-lg w-full my-2 text-lg p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex flex-row justify-between my-2 text-sm text-red-900">
          <label className="hover:italic">
            <input type="checkbox" name="RememberMe" /> Remember Me?
          </label>
          <h6 className="hover:underline italic cursor-pointer">Forgot Password?</h6>
        </div>

        <div className="flex gap-4 mt-5">
  <button
    type="submit"
    className="hover:bg-black w-1/2 font-bold text-lg rounded-2xl bg-red-900 text-white py-2"
  >
    Login
  </button>

  <button
    type="button"
    className="hover:bg-red-900 w-1/2 font-bold text-lg rounded-2xl bg-black text-white py-2"
  >
    Signup
  </button>
</div>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;