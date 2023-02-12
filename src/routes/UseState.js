import { useState } from "react";

const UseState = () => {
  // updating count will re-render the component
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>useState hook</h2>
      <p className="state">count state: {count}</p>
      <button onClick={handleIncrement}>Increment count</button>
    </div>
  );
};

export default UseState;
