import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="row">
      <Link className="card" to="/use-state">
        <h3>useState hook</h3>
      </Link>
      <Link className="card" to="/use-effect">
        <h3>useEffect hook</h3>
      </Link>
      <Link className="card" to="/use-ref">
        <h3>useRef hook</h3>
      </Link>
    </div>
  );
};

export default HomePage;
