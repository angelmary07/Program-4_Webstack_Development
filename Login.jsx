// src/pages/Login.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!email || !password) {
      setMessage({ type: 'danger', text: 'Email and password are required' });
      return;
    }

    if (isSignup && !name) {
      setMessage({ type: 'danger', text: 'Name is required for signup' });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: 'danger', text: 'Password must be at least 6 characters' });
      return;
    }

    // Simulate success
    setMessage({
      type: 'success',
      text: isSignup ? 'Account created successfully!' : 'Logged in successfully!',
    });

    // Reset form
    setFormData({ name: '', email: '', password: '' });

    // Optional: redirect after 2 seconds
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 3000);
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4" style={{ maxWidth: '500px', background: '#fffbe6' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: '#e3881d' }}>
            {isSignup ? 'Create Account' : 'Sign In'}
          </h2>

          {message.text && (
            <Alert variant={message.type} dismissible className="mb-4">
              {message.text}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required={isSignup}
                />
              </Form.Group>
            )}

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

            <Button
              type="submit"
              variant="warning"
              className="w-100 mb-3"
              style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>

            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setIsSignup(!isSignup)}
                style={{ color: '#e3881d' }}
              >
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </div>

            {!isSignup && (
              <div className="text-center mt-3">
                <Link to="#" style={{ color: '#e3881d' }}>
                  Forgot password?
                </Link>
              </div>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
