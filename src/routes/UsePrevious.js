import { useEffect, useRef, useState } from "react";

const UsePrevious = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    console.log("use effect...");
    prevCount.current = count;
  }, [count]);

  console.log("return...");
  return (
    <div>
      <h2>How to get previous value of props or state?</h2>
      <p className="state">
        count: {count}, prevCount: {prevCount.current}
      </p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment count
      </button>
    </div>
  );
};

export default UsePrevious;
