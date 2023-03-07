# React Hooks

Hooks were introduced in React v16.8, Hooks are special functions that lets you hook into React features.

- **Hooks cannot be called conditionally or inside loops**.

- React hooks can only be used used inside a functional component.

## useState

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
