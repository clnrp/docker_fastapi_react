import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link className="item" to="/">Home</Link>
      <Link className="item" to="/about">Sobre</Link>
      <Link className="item" to="/signin">Login</Link>
      <Link className="item" to="/apitest">APITest</Link>
    </nav>
  );
};

export default Navbar;
