import React from "react";
import PropTypes from "prop-types";

const Todo = ({ description, deadline }) => {
  const todos = [
    {
      id: 1,
      description: "Complete Todo API",
      deadline: "2023-01-19",
    },
  ];
  return (
    <table>
      <thead>
        <th>
          <td>description</td>
          <td>details</td>
        </th>
      </thead>
      <tbody>
        <tr>
          <td>{description}</td>
          <td>{deadline}</td>
        </tr>
      </tbody>
    </table>
  );
};

Todo.propTypes = {
  description: PropTypes.string,
  deadline: PropTypes.string,
};
export default Todo;
