import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; // Ensure correct imports

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState({ email: '' });
  const [submitData, setSubmittedData] = useState(false);

  const validateEmail = (email) => {
    // regex that matches 
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError({ email: 'Invalid email address' });
    } else {
      setError({ email: '' });
      setSubmittedData(true);
      
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <section>
    <Form onSubmit={handleSubmit}>
      {submitData && <Alert variant="success">Form submitted successfully!</Alert>}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="email" value={formData.email}
          onChange={handleChange}
          isInvalid={!!error.email}
        />
        <Form.Control.Feedback type="invalid">
          {error.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3} value={formData.message} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    </section>
  );
};

export default Contact;
