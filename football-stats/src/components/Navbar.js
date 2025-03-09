// Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">⚽</div>
      
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