import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  const location = useLocation(); 

  return (
    <BootstrapNavbar 
      expand="lg" 
      bg="dark" 
      variant="dark" 
      sticky="top" 
      className="shadow-sm"
    >
      <Container>
        {/* Brand / Logo */}
        <Link 
          className="navbar-brand fw-bold fs-4" 
          to="/"
          style={{ color: '#ffe066', fontFamily: 'Georgia, serif' }}
        >
          <i className="fas fa-building me-2"></i>
          Elite Resident
        </Link>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'active' : ''}
            >
              Gallery
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/complaints" 
              className={location.pathname === '/complaints' ? 'active' : ''}
            >
              Complaints
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/stats" 
              className={location.pathname === '/stats' ? 'active' : ''}
            >
              Stats & Rating
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/login" 
              className={`ms-3 btn btn-warning text-dark fw-bold ${location.pathname === '/login' ? 'active' : ''}`}
            >
              Login / Sign Up
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
