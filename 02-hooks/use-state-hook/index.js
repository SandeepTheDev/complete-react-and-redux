const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment +</button>
      <button onClick={handleDecrement}>Decrement -</button>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
