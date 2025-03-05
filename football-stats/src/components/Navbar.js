import { Link } from 'react-router-dom';
import './Navbar.css';

// Navbar component
export
const Navbar = () => (
  <nav className="navbar-container">
    <div className="navbar-logo">⚽ Football Stats</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/compare" className="nav-link">Compare</Link>
      <Link to="/timeline" className="nav-link">Timeline</Link>
    </div>
  </nav>
);