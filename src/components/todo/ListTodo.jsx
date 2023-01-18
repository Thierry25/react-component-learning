import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllMyTodos, deleteTodoById } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const [successfulMessage, setSuccessfulMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();
  const username = auth.username;
  const navigate = useNavigate();

  useEffect(() => {
    return getMyTodos(username);
  }, [username]);

  const getMyTodos = (username) => {
    getAllMyTodos(username).then((response) => setTodos(response.data));
  };

  const deleteTodo = (id) => {
    deleteTodoById(username, id)
      .then((response) => {
        if (response.status === 200) {
          setSuccessfulMessage("Deletion successful");
          getMyTodos(username);
        }
      })
      .catch((err) => setErrorMessage(err.response.data.description));
  };

  const updateTodo = (id) => {
    navigate(`/todo/${id}`);
  };

  return (
    <div className="container">
      <h1>List of your tasks to complete</h1>
      {successfulMessage && (
        <div className="alert alert-success">{successfulMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Deadline</th>
            <th>IsDone?</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>{todo.done.toString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn btn-success m-2" onClick={() => updateTodo(-1)}>
        Add New Todo
      </div>
    </div>
  );
};

export default ListTodo;
