import React, { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import {
  executeBasicAuthenticationService,
  executeJwtAuthenticationService,
} from "../api/AuthenticationAPiService";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("");
  const [token, setToken] = useState("");

  // async function loginBasic(username, password) {
  //   const baToken = `Basic ${window.btoa(`${username}:${password}`)}`;
  //   try {
  //     const response = await executeBasicAuthenticationService(baToken);
  //     if (response.status === 200) {
  //       setAuthenticated(true);
  //       setUserName(username);
  //       setToken(baToken);
  //       apiClient.interceptors.request.use((config) => {
  //         config.headers["Authorization"] = baToken;
  //         return config;
  //       });
  //       return true;
  //     } else {
  //       logout();
  //       return false;
  //     }
  //   } catch (error) {
  //     logout();

  //     return false;
  //   }
  // }

  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );
      console.log(response);
      if (response.status === 200) {
        setAuthenticated(true);
        setUserName(username);
        console.log(response);
        const jwtToken = `Bearer ${response.data.token}`;
        setToken(jwtToken);
        apiClient.interceptors.request.use((config) => {
          config.headers["Authorization"] = jwtToken;
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
