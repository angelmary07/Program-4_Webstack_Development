// src/pages/Home.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-5">
      <Container>
        <h1>Welcome to Elite Resident Portal</h1>
        <p className="lead">Your community hub for seamless living.</p>
        <Link to="/services">
          <Button variant="warning" size="lg">Explore Services</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;
