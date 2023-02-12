# React Hooks

Hooks were introduced in React v16.8, Hooks are special functions that lets you hook into React features. **Hooks cannot be called conditionally or inside loops**. React hooks can only be used used inside a functional component.

## [useState](https://github.com/SandeepTheDev/react-hooks/blob/main/src/routes/UseState.js)

`useState` hook let you use **state** inside the functional component. `useState` returns an array with a stateful value initialized with passed argument and a function to update the value. whenever the state changed React re-render the component with updated state.

```js
const countHook = useState(0);
const count = countHook[0];
const setCount = countHook[1];
```

or

```js
const [count, setCount] = useState(0);
```

## useEffect

The effect hook **lets you perform side effects in functional component**. Effect happens after render, **React guarantees the DOM has been updated by the time it runs the effects**. By default it runs both after the first render and after every update useEffect can be customize by giving dependencies array.

👉 **Clean up function that executes on component unmount**.

## [useRef](https://github.com/SandeepTheDev/react-hooks/blob/main/src/routes/UseRef.js)

`useRef` returns an object with `.current` property initialized with passed argument. `useRef` can be used to **store information in variable** that will be persist for the lifetime of the component. Unlike `useState` it doesn't cause re-render of the component whenever the ref's value changed.

- Using `useRef` with `ref` attribute allows to access DOM element like `<input />`, `<div>` directly.

```js
const count = useRef(0); // {current: 0}
```

### [forwardRef](https://github.com/SandeepTheDev/react-hooks/blob/main/src/routes/UseRef.js#L3)

In addition of `useRef` hook React expose `forwardRef`, calling forwardRef let component receive a ref and forward it to child component.

### [How to get previous value of props or state?](https://github.com/SandeepTheDev/react-hooks/blob/main/src/routes/UsePrevious.js)

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

## [useReducer](https://github.com/SandeepTheDev/react-hooks/blob/main/src/routes/UseReducer.js)

`useReducer` and `useState` both accomplish same thing by using different ways. **`useReducer` lets you move the state update logic into a single function outside of your component**.

```js
const [state, dispatch] = useReducer(reducerFunc, initialState, createInitialStateFunc?);
```

- `useReducer` hook takes two arguments **reducerFunc** and **initialState** and one optional argument **createInitialStateFunc** which is called with **createInitialStateFunc(initialState)** and return initial state.

- `useReducer` returns an array with **state** and **dispatch** function.

- **dispatch** function lets you update the state it takes **action** as the only argument and triggers re-render.

- **reducerFunc** is a pure function that takes **currentState** and **action** as the argument and return next state.
