# React Introduction

React is **component-based** JavaScript library for building user interfaces. **Component is a piece of UI that manage its own state**, then compose them to make complex UIs. **React will efficiently update and render just the right component whenever the state change**.

## Virtual DOM vs Real DOM

DOM stands for **Document Object Model**. Its a tree like structure that represents all the nodes in the HTML document. React uses something called Virtual DOM to update Real DOM efficiently. Whenever the state of application changed React create a Virtual DOM with updated state and compare it with previous Virtual DOM and then sync it with Real DOM efficiently this process of comparison and updating the Real DOM is also known as **Diffing**. And the algorithm that is used to compare DOMs is **Diffing Algorithm**.

## How to add React in HTML

To add React in a web page **react** and **react-dom** library is required.

- **react.development.js** lets you define React component.
- **react-dom.development.js** lets React render HTML element to DOM.

**Development build has more helpful error message which makes it slow for production ready build replace development.js with production.min.js**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Introduction</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="index.js"></script>
  </body>
</html>
```

## React.createElement(type, props?, children?)

```js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World!")
  );
};
```

## React.createRoot(container, options?)

**React 18 supports concurrency that helps with state update prioritization**. `ReactDOM.render` does not support concurrency to use concurrency `ReactDOm.createRoot` is required.

```js
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
```
