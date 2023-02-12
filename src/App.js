import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./routes/HomePage";
import UseEffect from "./routes/UseEffect";
import UseRef from "./routes/UseRef";
import UseState from "./routes/UseState";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Link className="title" to="/">
          React hooks
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-ref" element={<UseRef />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
