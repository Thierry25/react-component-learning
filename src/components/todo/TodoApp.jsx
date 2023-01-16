import React from "react";
import Login from "./Login";
import "./Todo.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Error from "./Error";
import ListTodo from "./ListTodo";
import Header from "./Header";
import Footer from "./Footer";
import Logout from "./Logout";

const TodoAp = () => {
  return (
    <div className="todoApp">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/welcome/:username" element={<Welcome />} />
          <Route path="/todos" element={<ListTodo />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default TodoAp;
