import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { retrieveTodo } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

const Todo = () => {
  const username = useAuth().username;
  const { id } = useParams();

  const [currentTodo, setCurrentTodo] = useState({
    description: "",
    targetDate: "",
    done: false,
  });

  useEffect(() => {
    retrieveTodo(username, id)
      .then((response) => {
        const val = response.data;
        setCurrentTodo({
          description: val.description,
          targetDate: val.targetDate,
          done: val.done,
        });
      })
      .catch((err) => console.log(err));
  }, [username, id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <h1>{currentTodo.description}</h1>
      <h1>{currentTodo.done.toString()}</h1>
      <h1>{currentTodo.targetDate}</h1>
    </div>
  );
};

export default Todo;
