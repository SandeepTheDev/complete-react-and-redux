## useEffect

The effect hook **lets you perform side effects in functional component**. Effect happens after render.

- **React guarantees the DOM has been updated by the time it runs the effects**.

By default it runs both after the first render and after every update useEffect can be customized by giving dependencies array.

```js
useEffect(() => {
  // this effect will run after the first render only.
}, []);
```

```js
useEffect(() => {
  // this effect will run on every update.
});
```

```js
const [count, setCount] = useState(0);

useEffect(() => {
  // this effect will run whenever count updates.
}, [count]);
```

### The cleanup function

Cleanup function runs whenever the component gets **unmount** and **before every re-render with changed dependencies**.

```js
useEffect(() => {
  return () => {
    // will run when component gets unmount.
  };
}, []);
```

## useRef

`useRef` returns an object with `.current` property initialized with passed argument.

```js
const count = useRef(0); // {current: 0}
```

- `useRef` can be used to **store information in variable** that will be persist for the lifetime of the component.

- Unlike `useState` it **doesn't cause re-render of the component whenever the ref's value changed**.

- Using `useRef` with `ref` attribute allows to access DOM element like `<input />`, `<div>` directly.

### forwardRef

In addition of `useRef` hook React expose `forwardRef` api, calling forwardRef let component receive a ref and forward it to child component.

```js
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
```

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
