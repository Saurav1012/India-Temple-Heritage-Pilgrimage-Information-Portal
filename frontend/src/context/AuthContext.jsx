import React, { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setIsAdmin(parsedUser.role === "admin");
    }
  }, []);

  // Signup
  const signup = async (username, password) => {
    try {
      await api.signup(username, password);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  // Login
  const login = async (username, password) => {
    try {
      const data = await api.login(username, password);
      setIsAuthenticated(true);
      setUser(data);
      setIsAdmin(data.role === "admin");
      localStorage.setItem("user", JSON.stringify(data));
      
      return {
        success: true,
        user: data,
      };
    } catch (error) {
      setIsAuthenticated(false);
      setIsAdmin(false);
      setUser(null);
      
      return {
        success: false,
        message: error.message,
      };
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    
    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        isAuthenticated,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);