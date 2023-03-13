# React Performance

Basically React Performance can be divided into two categories:

- How can we make our render to take less time.
- How can we minimize the number of renders.

## `useMemo`

A React hook to memoize a value. The `useMemo` hook takes in a function that returns a value to be memoized and an dependency array. The `useMemo` hook returns the memoized value, and it only calls the passed in function to recalculate the value if an item in the dependency array changes.

```js
const value = useMemo(() => {
  return slowFunction(x, y);
}, [x, y]);
```

## `useCallback`

A React hook for memoizing a function. The `useCallback` hook works the exact same as `useMemo` except rather than memoizing the return value of a function, it memoizes the entire function. This can be useful for a variety of reasons, such as `useCallback` hook is used when you have a component in which a child is rendering repeatedly without the need for it.

```js
const value = useCallback(() => {
  console.log(x, y);
}, [x, y]);
```

## `React.memo`

A React higher order component that takes in a component and returns a memoized version of that component. If the props have not changed, wrapping a component in `React.memo` will cause it to avoid re-rendering. This function optionally also takes in second callback function as a parameter to determine when the component should re-render with more fine control. For example, this component will only re-render when the number of props changes:

```js
const MemoizedComponent = React.memo(MyComponent, areEqual);

function areEqual(oldProps, newProps) {
  return oldProps === newProps;
}
```

## `React.lazy`

A React function for dynamically importing components, creating a potential performance boost when certain components are included in modules but not necessary for the initial render. The `lazy` function takes in a callback that is run when the component is used, and this function should return a call to the `import` function.

```js
const LazyComponent = react.lazy(() => import("./MyComponent"));
```

## `React.Suspense`

A react component for specifying a fallback interface while a child component is preparing to render (such as waiting for lazy import). The `Suspense` component takes a `fallback` prop of React element, and its `children` prop is a suspending component.

```js
<Suspense fallback={<LoadingIndicator />}>
  <LazyComponent />
</Suspense>
```
