const slowFunction = (num) => {
  console.log("Calling slow function...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const App = () => {
  const [number, setNumber] = React.useState(0);
  const doubleNumber = React.useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <div>useMemo hook</div>
      <input onChange={(e) => setNumber(e.target.value)} value={number} />
      <div>Double number {doubleNumber}</div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
