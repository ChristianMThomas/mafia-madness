import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("jwtToken");
    if (stored) setToken(stored);
  }, []);

  const login = (jwt) => {
    localStorage.setItem("jwtToken", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
  };

  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};