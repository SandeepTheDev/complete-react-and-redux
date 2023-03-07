const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return { ...state };
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <>
      <div>useReducer hook</div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement -
      </button>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
