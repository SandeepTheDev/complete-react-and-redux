import { forwardRef, useRef } from "react";

const ForwardRef = forwardRef(function (props, ref) {
  return <p ref={ref} className="state"></p>;
});

const UseRef = () => {
  // updating ref value doesn't re-render the component
  const countRef = useRef(0);
  // ref can access DOM element
  const refElm = useRef();

  const handleIncrementRef = () => {
    countRef.current = countRef.current + 1;
  };

  const injectLatestRefValue = () => {
    refElm.current.innerHTML = `ref can access DOM element: ${countRef.current}`;
  };

  return (
    <div>
      <h2>useRef hook</h2>
      <p className="state">ref.current: {countRef.current}</p>
      <ForwardRef ref={refElm} />
      <button onClick={handleIncrementRef}>
        Increment ref without re-render
      </button>
      <button onClick={injectLatestRefValue}>Access DOM elm</button>
    </div>
  );
};

export default UseRef;
