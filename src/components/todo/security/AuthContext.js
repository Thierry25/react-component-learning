import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("");

  const login = (username, password) => {
    if (username === "thierrymarcelin" && password === "marcelin") {
      setAuthenticated(true);
      setUserName(username);
      return true;
    } else {
      setAuthenticated(false);
      setUserName(null);
      return false;
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
