import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/transactions">Index</Link>{" "}
      <Link to="/transactions/new">New</Link>
    </nav>
  );
}

export default NavBar;
