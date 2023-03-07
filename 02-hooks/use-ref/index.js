const RenderCount = React.forwardRef((props, ref) => {
  return <div ref={ref} />;
});

const App = () => {
  const [name, setName] = React.useState("");
  const renderCount = React.useRef(0);
  const refElm = React.useRef(null);

  React.useEffect(() => {
    refElm.current.innerHTML = `I rendered ${renderCount.current}`;
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <div>useRef hook</div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <div>{name}</div>
      <RenderCount ref={refElm} />
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
