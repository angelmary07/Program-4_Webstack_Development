// src/pages/Signup.jsx (optional - if separate from Login)
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMessage('Please fill all fields');
      return;
    }
    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters');
      return;
    }
    setMessage('Account created successfully! You can now log in.');
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4" style={{ maxWidth: '500px', background: '#fffbe6' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: '#e3881d' }}>
            Sign Up
          </h2>

          {message && <Alert variant={message.includes('success') ? 'success' : 'danger'}>{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mb-3">
              Create Account
            </Button>

            <div className="text-center">
              <Link to="/login" style={{ color: '#e3881d' }}>
                Already have an account? Sign In
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Signup;
