import React from "react";
import todos from "../data/todos";

const ListTodo = () => {
  return (
    <div className="container">
      <h1>List of your tasks to complete</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Deadline</th>
            <th>IsDone?</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.deadline}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
