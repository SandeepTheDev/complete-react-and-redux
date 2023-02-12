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
