import React from "react";
import Login from "./Login";
import "./Todo.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "./Welcome";
import Error from "./Error";
import ListTodo from "./ListTodo";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";
import AuthProvider, { useAuth } from "./security/AuthContext";

const Authenticated = function ({ children }) {
  const auth = useAuth();
  if (auth.isAuthenticated) return children;
  return <Navigate to="/login" />;
};

const TodoAp = () => {
  return (
    <div className="todoApp">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/welcome/:username"
              element={
                <Authenticated>
                  <Welcome />{" "}
                </Authenticated>
              }
            />
            <Route
              path="/todos"
              element={
                <Authenticated>
                  <ListTodo />
                </Authenticated>
              }
            />
            <Route
              path="/logout"
              element={
                <Authenticated>
                  <Logout />
                </Authenticated>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AuthProvider>
      <Footer />
    </div>
  );
};

export default TodoAp;
