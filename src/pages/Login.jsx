import React from "react";
import { useNavigate } from "react-router-dom";

// Login page
const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate("/Home"); // Redirect to home page
  };

  return (
    // Our div returns the login form that will check with our backend for valid credentials.
    <div className="w-screen h-screen bg-[url(./assets/images/login2.jpg)]">
      <img src="./src/assets/images/mafialogo.png" className="w-3/12 m-auto" />
      <form className="w-full max-w-md mx-auto p-8 bg-white rounded-md">
        <h1 className="text-3xl text-red-900 text-center font-bold font-serif">
          Login
        </h1>

        <input
          className="border-1 rounded-lg w-full my-3 text-lg p-2"
          type="text"
          name="Username"
          id="Username"
          placeholder="Username"
          required
        />

        <input
          className="border-1 rounded-lg w-full my-2 text-lg p-2"
          type="password"
          name="Password"
          id="Password"
          placeholder="Password"
          required
        />

        <div className="flex flex-row justify-between my-2 text-sm text-red-900">
          <label className="hover:italic">
            <input type="checkbox" name="RememberMe" id="RememberMe" /> Remember
            Me?
          </label>
          <h6 className="hover:underline italic cursor-pointer">
            Forgot Password?
          </h6>
        </div>

        <button
          onClick={handleLoginClick}
          className="hover:bg-black w-full font-bold text-lg mt-2 rounded-2xl bg-red-900 text-white py-2"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
