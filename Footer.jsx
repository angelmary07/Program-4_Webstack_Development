// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-0" style={{ color: '#ffe066' }}>
          © 2025 Elite Resident Community Portal — All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
