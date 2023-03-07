const App = () => {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleIncrement}>Increment +</button>
      <button onClick={handleDecrement}>Decrement -</button>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
