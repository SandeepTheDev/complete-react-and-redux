### How to get previous value of props or state?

```js
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
```

## useReducer

`useReducer` and `useState` both accomplish same thing by using different ways. **`useReducer` lets you move the state update logic into a single function outside of your component**.

```js
const [state, dispatch] = useReducer(reducerFunc, initialState, createInitialStateFunc?);
```

- `useReducer` hook takes two arguments **reducerFunc** and **initialState** and one optional argument **createInitialStateFunc** which is called with **createInitialStateFunc(initialState)** and return initial state.

- `useReducer` returns an array with **state** and **dispatch** function.

- **dispatch** function lets you update the state it takes **action** as the only argument and triggers re-render.

- **reducerFunc** is a pure function that takes **currentState** and **action** as the argument and return next state.

```js
import { useReducer } from "react";

/**
 * reducer should be pure function and should take "state" and "action" as arguments
 * and should return next state.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_AGE": {
      return {
        ...state,
        age: state.age + 1,
      };
    }

    case "DECREMENT_AGE": {
      return {
        ...state,
        age: state.age - 1,
      };
    }

    default: {
      return { ...state };
    }
  }
};

const UseReducer = () => {
  // dispatch function is called by useReducer it takes "action" as the only argument and trigger re-render.
  const [state, dispatch] = useReducer(reducer, { age: 0 });

  return (
    <div>
      <h2>useReducer hook</h2>
      <p className="state">Age state: {state.age}</p>
      <button onClick={() => dispatch({ type: "INCREMENT_AGE" })}>
        Increment age
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_AGE" })}>
        Decrement age
      </button>
    </div>
  );
};

export default UseReducer;
```
