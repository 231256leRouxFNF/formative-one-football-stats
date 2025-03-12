// Navbar.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column vh-100">
      <Navbar.Brand href="/" className="mb-4">⚽ Football Stats</Navbar.Brand>
      <Nav className="flex-column w-100">
        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
        <Nav.Link as={Link} to="/compare" className="nav-link">Compare</Nav.Link>
        <Nav.Link as={Link} to="/timeline" className="nav-link">Timeline</Nav.Link>
      </Nav>
      <Button variant="outline-light" className="share-btn">Share</Button>
    </Navbar>
  );
};

export default CustomNavbar;