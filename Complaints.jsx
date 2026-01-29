// src/pages/Complaints.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function Complaints() {
  const [formData, setFormData] = useState({
    name: '',
    apartment: '',
    category: 'maintenance',
    description: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.apartment || !formData.description.trim()) {
      setMessage('Please fill all required fields.');
      return;
    }
    setMessage('Complaint submitted successfully! We will get back to you.');
    setFormData({ name: '', apartment: '', category: 'maintenance', description: '' });
  };

  return (
    <Container className="py-5">
      <Card className="mx-auto shadow" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Submit Your Complaint</h2>
          {message && <Alert variant={message.includes('success') ? 'success' : 'danger'}>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apartment Number</Form.Label>
              <Form.Control
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" value={formData.category} onChange={handleChange}>
                <option value="maintenance">Maintenance</option>
                <option value="security">Security</option>
                <option value="services">Services</option>
                <option value="others">Others</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit Complaint
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Complaints;
