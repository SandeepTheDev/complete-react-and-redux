# React Hooks

Hooks are special functions that lets you hook into React features. **Hooks cannot be called conditionally or inside loops**. React hooks can only be used used inside a functional component.

## useState

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

## useRef

`useRef` returns an object with `.current` property initialized with passed argument. `useRef` can be used to **store information in variable** that will be persist for the lifetime of the component. Unlike `useState` it doesn't cause re-render of the component whenever the ref's value changed.

- Using `useRef` with `ref` attribute allows to access DOM element like <input>, <div> directly.

```js
const count = useRef(0); // {current: 0}
```
