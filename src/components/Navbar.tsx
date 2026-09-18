
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Recipe Finder
        </Link>

        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/favorites" className="nav-link">
             Favorites
          </Link>

          <Link to="/search" className="nav-link">
             Search
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;