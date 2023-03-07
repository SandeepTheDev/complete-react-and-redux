# React Hooks

Hooks were introduced in React v16.8, Hooks are special functions that lets you hook into React features.

- **Hooks cannot be called conditionally or inside loops**.

- React hooks can only be used used inside a functional component.

## 1. [useState](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-state/index.js)

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

## 2. [useEffect](https://github.com/SandeepTheDev/complete-react-and-redux/blob/main/02-hooks/use-effect/index.js)

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
