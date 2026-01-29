// src/pages/Services.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function Services() {
  const [formData, setFormData] = useState({
    service: 'Clubhouse',
    date: '',
    details: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date) {
      setMessage('Please select a preferred date');
      return;
    }
    setMessage(`Service "${formData.service}" booked for ${formData.date}. We will confirm shortly!`);
    setFormData({ service: 'Clubhouse', date: '', details: '' });
  };

  return (
    <Container className="py-5">
      <Card className="mx-auto shadow-lg" style={{ maxWidth: '600px', background: '#fffbe6' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: '#e3881d' }}>
            Book Community Service
          </h2>

          {message && <Alert variant="success" className="mb-4">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>
                Select Service
              </Form.Label>
              <Form.Select name="service" value={formData.service} onChange={handleChange}>
                <option value="Clubhouse">Clubhouse</option>
                <option value="Gym">Gym</option>
                <option value="Swimming Pool">Swimming Pool</option>
                <option value="Party Hall">Party Hall</option>
                <option value="Maintenance">Maintenance/Repair</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>
                Preferred Date
              </Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ color: '#a55f17', fontWeight: 'bold' }}>
                Additional Details
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                placeholder="Any specific requirements..."
                value={formData.details}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100" style={{ fontWeight: 'bold' }}>
              Request Booking
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Services;
