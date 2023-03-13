import { useState, useMemo, useCallback, lazy, Suspense } from "react";
const Button = lazy(() => import("./Button"));

function App() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState("");

  const fibValue = useMemo(() => {
    console.log("Calculating fib value");
    return fib(num);
  }, [num]);

  const onClickLog = useCallback(() => {
    console.log(logValue);
  }, [logValue]);

  return (
    <div className="App">
      <h1>
        {/** On change of `logValue` function `fib(num)` was recalculating useMemo is used to cache the value now on each re-render num will be picked from cache if the num is not actually changed. */}
        Fib {num} is {fibValue}
      </h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={logValue}
        onChange={(e) => setLogValue(e.target.value)}
      />

      {/** On Each re-render even when num is getting changed button was re-rendering because each time new function was passed as a props using useCallback we are using the same function until the logValue is getting changed. */}
      {logValue.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Button onClick={onClickLog}>Log Value</Button>
        </Suspense>
      )}
    </div>
  );
}

function fib(num) {
  if (num === 2) return 1;
  if (num === 1) return 0;
  return fib(num - 1) + fib(num - 2);
}

export default App;
