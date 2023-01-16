import React from "react";
import todos from "../data/todos";

const ListTodo = () => {
  return (
    <div className="listTodo">
      <h1>List of your tasks to complete</h1>
      <table>
        <thead>
          <th>
            <td>Description</td>
            <td>Deadline</td>
            <td>IsDone?</td>
          </th>
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
