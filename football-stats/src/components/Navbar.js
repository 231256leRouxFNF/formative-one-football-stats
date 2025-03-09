import { Link } from 'react-router-dom';
import './Navbar.css';

console.log('Navbar.js loaded');

// Navbar component
const Navbar = () => {
  console.log('Navbar component rendered');
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">⚽ Football Stats</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/compare" className="nav-link">Compare</Link>
        <Link to="/timeline" className="nav-link">Timeline</Link>
      </div>
      <button className="share-btn">Share</button>
    </nav>
  );
};

export default Navbar;