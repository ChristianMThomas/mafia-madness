import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import SpotlightEffect from "../components/SpotlightEffect";
import ThemeToggle from "../components/ThemeToggle";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      login(res.data.token);
      navigate("/Home");
    } catch (err) {
      const message =
        err.response?.data?.message || "Authentication failed. Verify your credentials.";
      setError(message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Spotlight effect */}
      <SpotlightEffect enabled={true} intensity={0.7} />

      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,#8B5CF6_1px,transparent_1px),radial-gradient(circle_at_80%_50%,#E63946_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-display tracking-[0.15em] mb-2 text-theme-primary text-shadow-purple-md">
            MAFIA MADNESS
          </h1>
          <p className="text-sm font-mono tracking-wider text-theme-muted">
            ★ CLASSIFIED ACCESS ★
          </p>
        </div>

        {/* Login Form */}
        <div className="glass-card p-8">
          <h2 className="text-3xl font-display text-center mb-2 tracking-wider text-theme-primary">
             LOGIN
          </h2>
          <p className="text-center mb-6 text-sm text-theme-body">
            Enter your credentials to access
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-sm text-theme-body"
              >
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                type="email"
                placeholder="agent@classified.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-semibold text-sm text-theme-body"
              >
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
                autoComplete="current-password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-theme-body">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#8B5CF6]"
                />
                <span>Remember Me</span>
              </label>
              <Link
                to="/forgot-password"
                className="hover:underline transition-colors text-theme-primary"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded text-center text-sm font-semibold bg-[#E63946]/10 border border-[#E63946] text-[#E63946]">
                ⚠ {error}
              </div>
            )}

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                ACCESS 
              </button>

              <Link to="/register" className="block">
                <button
                  type="button"
                  className="btn-ghost w-full text-lg"
                >
                 REGISTER
                </button>
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-[#475569]/20 text-center">
            <p className="text-xs font-mono text-[#475569] dark:text-[#475569] light:text-[#64748B]">
              All access attempts are logged and monitored
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;