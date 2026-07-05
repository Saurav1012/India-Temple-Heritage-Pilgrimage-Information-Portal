import React, { createContext, useState, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      const user = await api.login(password);

      setIsAuthenticated(true);
      setIsAdmin(true);

      return {
        success: true,
        user,
      };
    } catch (error) {
      setIsAuthenticated(false);
      setIsAdmin(false);

      return {
        success: false,
        message: error.message,
      };
    }
  };

  // Logout
  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{
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