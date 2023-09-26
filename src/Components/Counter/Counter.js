import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={counterStyle}>
      <h2 style={displayStyle}>Counter: {count}</h2>
      <button
        style={Object.assign({}, buttonHoverStyle, buttonStyle)}
        onClick={increaseCount}
      >
        +
      </button>
      <button
        style={Object.assign({}, buttonHoverStyle, buttonStyle)}
        onClick={decreaseCount}
      >
        -
      </button>
      <button
        style={Object.assign({}, buttonHoverStyle, buttonStyle)}
        onClick={resetCount}
      >
        Reset
      </button>
    </div>
  );
}
const counterStyle = {
  textAlign: "center",
  margin: "20px",
};

const displayStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const buttonStyle = {
  fontSize: "18px",
  padding: "5px 10px",
  margin: "5px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

const buttonHoverStyle = {
  backgroundColor: "#00568",
};

export default Counter;
