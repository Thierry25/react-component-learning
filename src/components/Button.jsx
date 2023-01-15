import React from "react";

const Button = ({ children, styled, operation, initial, handleOp, value }) => {
  const add = (val1, val2) => {
    return val1 + val2;
  };

  const subtract = (val1, val2) => {
    return val1 - val2;
  };

  const multiply = (val1, val2) => {
    return val1 * val2;
  };

  const divide = (val1, val2) => {
    return val2 !== 0 ? val1 / val2 : 0;
  };

  const ops = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  const calculate = () => {
    return ops[operation](initial, value);
  };

  return (
    <button className={styled} onClick={() => handleOp(calculate)}>
      {children}
    </button>
  );
};

export default Button;
