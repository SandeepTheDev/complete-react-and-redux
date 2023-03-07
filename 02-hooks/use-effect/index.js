const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(timerHandler, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    document.title = `useState hook ${count}`;
  }, [count]);

  const timerHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <div>useEffect hook</div>
      <div>Seconds: {count}</div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
