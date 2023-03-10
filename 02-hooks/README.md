# React Hooks

Hooks were introduced in React v16.8, Hooks are special functions that lets you hook into React features.

- **Hooks cannot be called conditionally or inside loops**.

- React hooks can only be used used inside a functional component.

## [1. useState](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-state/index.js)

`useState` hook let you use **state** inside the functional component.

- `useState` returns an array with a stateful value initialized with passed argument and a function to update the value.

- Whenever the state changed React re-render the component with updated state.

```js
const countHook = useState(0);
const count = countHook[0];
const setCount = countHook[1];
```

or

```js
const [count, setCount] = useState(0);
```

## [2. useEffect](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-effect/index.js)

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

## [3. useRef hook](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-ref/index.js)

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
const RenderCount = React.forwardRef((props, ref) => {
  return <div ref={ref} />;
});

const App = () => {
  const [name, setName] = React.useState("");
  const renderCount = React.useRef(0);
  const refElm = React.useRef(null);

  React.useEffect(() => {
    refElm.current.innerHTML = `I rendered ${renderCount.current}`;
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <div>useRef hook</div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <div>{name}</div>
      <RenderCount ref={refElm} />
    </>
  );
};
```

## [4. useReducer hook](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-reducer/index.js)

`useReducer` and `useState` both accomplish same thing by using different ways. **`useReducer` lets you move the state update logic into a single function outside of your component**.

```js
const [state, dispatch] = useReducer(reducerFunc, initialState, createInitialStateFunc?);
```

- `useReducer` hook takes two arguments **reducerFunc** and **initialState** and one optional argument **createInitialStateFunc** which is called with **createInitialStateFunc(initialState)** and return initial state.

- `useReducer` returns an array with **state** and **dispatch** function.

- **dispatch** function lets you update the state it takes **action** as the only argument and triggers re-render.

- **reducerFunc** is a pure function that takes **currentState** and **action** as the argument and return next state.

## [4. useMemo hook](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-memo/index.js)

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders.
