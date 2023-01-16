import React from "react";
import PropTypes from "prop-types";

const Todo = ({ description, deadline }) => {
  return (
    <>
      <h2>{description}</h2>
      <h2>{deadline}</h2>
    </>
  );
};

Todo.propTypes = {
  description: PropTypes.string,
  deadline: PropTypes.string,
};
export default Todo;
