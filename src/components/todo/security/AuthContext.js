import React, { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBaiscAuthenticationService } from "../api/HelloWorldApiService";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
  const [token, setToken] = useState("");

  async function login(username, password) {
    const baToken = `Basic ${window.btoa(`${username}:${password}`)}`;
    try {
      const response = await executeBaiscAuthenticationService(baToken);
      if (response.status === 200) {
        setAuthenticated(true);
        setUserName(username);
        setToken(baToken);
        apiClient.interceptors.request.use((config) => {
          config.headers["Authorization"] = baToken;
          return config;
        });
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();

      return false;
    }

    // if (username === "thierrymarcelin" && password === "marcelin") {
    //   setAuthenticated(true);
    //   setUserName(username);
    //   return true;
    // } else {
    //   setAuthenticated(false);
    //   setUserName(null);
    //   return false;
    // }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUserName(null);
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
