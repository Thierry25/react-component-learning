import React from "react";
import Login from "./Login";
import "./Todo.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Error from "./Error";

const TodoAp = () => {
  return (
    <div className="todoApp">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/welcome/:username" element={<Welcome />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default TodoAp;
