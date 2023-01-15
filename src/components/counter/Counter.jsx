import React, { useState } from "react";
import Button from "../Button";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleOperation = (newVal) => {
    setCount(newVal);
  };
  return (
    <div className="counter">
      <span className="count">{count}</span>
      <div>
        <Button
          handleOp={handleOperation}
          styled="counterButton"
          operation="+"
          value={5}
          initial={count}
        >
          +5
        </Button>

        <Button
          handleOp={handleOperation}
          styled="counterButton"
          operation="-"
          value={10}
          initial={count}
        >
          -10
        </Button>

        <Button
          handleOp={handleOperation}
          styled="counterButton"
          operation="*"
          value={100}
          initial={count}
        >
          *100
        </Button>
      </div>
    </div>
  );
};

export default Counter;
