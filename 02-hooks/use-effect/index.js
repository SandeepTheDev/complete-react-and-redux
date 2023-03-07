const App = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(timerHandler, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    document.title = `useState hook ${seconds}`;
  }, [seconds]);

  const timerHandler = () => {
    setSeconds((prevState) => prevState + 1);
  };

  return (
    <>
      <div>useEffect hook</div>
      <div>Seconds: {seconds}</div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
