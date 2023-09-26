import React, { useState, useEffect } from "react";

const counterStyle = {
  textAlign: "center",
  margin: "auto",
  width: "300px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "10px",
};
const paragraphStyle = {
  textAlign: "center",
  margin: "auto",
  fontSize: "16px",
};

function Counter() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const calculatedResult = count * 2;
    setResult(calculatedResult);
    console.log("Use Effect Running");
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div style={counterStyle}>
      <h1>Counter Use</h1>
      <p style={paragraphStyle}>Count: {count}</p>
      <p>Calculation: {result}</p>
      <button style={buttonStyle} onClick={incrementCount}>
        Increment
      </button>
      <button style={buttonStyle} onClick={decrementCount}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
