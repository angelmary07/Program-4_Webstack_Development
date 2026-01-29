// src/pages/Stats.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function Stats() {
  const [inputs, setInputs] = useState({
    residents: '',
    workers: '',
    complaints: '',
    resolved: '',
  });

  const [stats, setStats] = useState([]);
  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculate = (e) => {
    e.preventDefault();
    const r = Number(inputs.residents) || 0;
    const w = Number(inputs.workers) || 0;
    const c = Number(inputs.complaints) || 0;
    const res = Number(inputs.resolved) || 0;

    const pending = c - res;
    const avg = r > 0 ? (c / r).toFixed(2) : '0.00';

    setStats([
      { title: 'Total Residents', value: r },
      { title: 'Total Workers', value: w },
      { title: 'Total Complaints', value: c },
      { title: 'Resolved Complaints', value: res },
      { title: 'Pending Complaints', value: pending },
      { title: 'Avg Complaints / Resident', value: avg },
    ]);
  };

  return (
    <Container className="py-5">
      <Card className="shadow-lg mx-auto" style={{ maxWidth: '800px', background: '#fffbe6' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: '#e3881d' }}>
            Community Statistics & Rating
          </h2>

          <Form onSubmit={calculate}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Total Residents</Form.Label>
                  <Form.Control
                    type="number"
                    name="residents"
                    value={inputs.residents}
                    onChange={handleChange}
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Total Workers</Form.Label>
                  <Form.Control
                    type="number"
                    name="workers"
                    value={inputs.workers}
                    onChange={handleChange}
                    min="0"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Total Complaints</Form.Label>
                  <Form.Control
                    type="number"
                    name="complaints"
                    value={inputs.complaints}
                    onChange={handleChange}
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Resolved Complaints</Form.Label>
                  <Form.Control
                    type="number"
                    name="resolved"
                    value={inputs.resolved}
                    onChange={handleChange}
                    min="0"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="warning" type="submit" className="w-100 mb-4">
              Calculate Statistics
            </Button>
          </Form>

          {stats.length > 0 && (
            <Row className="g-3 mb-5">
              {stats.map((item, idx) => (
                <Col md={6} lg={4} key={idx}>
                  <Card className="text-center shadow-sm">
                    <Card.Body>
                      <Card.Title style={{ color: '#e3881d' }}>{item.title}</Card.Title>
                      <Card.Text className="fs-4 fw-bold">{item.value}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          <h4 className="text-center mb-3" style={{ color: '#e3881d' }}>
            Rate Our Community
          </h4>
          <div className="text-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  fontSize: '2.5rem',
                  color: star <= rating ? '#ffc107' : '#e0e0e0',
                  cursor: 'pointer',
                  margin: '0 5px',
                }}
              >
                ★
              </span>
            ))}
            {rating > 0 && (
              <p className="mt-3">You rated: {rating} stars</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Stats;
