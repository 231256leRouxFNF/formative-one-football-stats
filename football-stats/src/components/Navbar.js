// Navbar.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file
import logo from '../imgs/Logo.svg'; // Import the logo image with the correct case

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column vh-100 side-navbar">
      <Navbar.Brand href="/" className="mb-4">
        <img src={logo} alt="Football Stats Logo" style={{ width: '120px', height: '120px' }} />
      </Navbar.Brand>
      <Nav className="flex-column w-100">
        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
        <Nav.Link as={Link} to="/compare" className="nav-link">Compare</Nav.Link>
        <Nav.Link as={Link} to="/timeline" className="nav-link">Timeline</Nav.Link>
      </Nav>
      <Button variant="outline-light" className="share-btn mt-auto">Share</Button>
    </Navbar>
  );
};

export default CustomNavbar;