import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState({ name:'', email: '', message: '' });
  const [submitData, setSubmittedData] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    setError({
      ...error,
      [id]:'',
    })
  };

  const validateEmail = (email) => {
    // regex that matches 
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let error = { name:'', email: '', message: '' };
    // validates if name field has text
    if(!formData.name){
      isValid = false;
      error.name= 'Name is required.';
    }
    // validates if email is left empty 
    if (!formData.email) {
      isValid= false;
      error.email= 'Email address is required.';
      // validates if email has correct syntax
    } else if(!validateEmail(formData.email)){
      isValid = false;
      error.email= 'Invalid email address.'
    }
    // validates that message has text
    if (!formData.message){
      isValid= false;
      error.message= 'Message is required.';
    }
    setError(error);

  // handles form submission for valid inputs
  if (isValid){
    setSubmittedData(true);
    console.log('Contact form submitted successfully!', formData);
  } else {
    setSubmittedData(false);
  }
};

  return (
    <section>
      <h1>Contact</h1>
      <Form onSubmit={handleSubmit}>
        {submitData && <Alert variant="success">Contact form submitted successfully!</Alert>}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" value={formData.name} onChange={handleChange} 
          isInvalid={!!error.name}/>
          <Form.Control.Feedback type="invalid"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Email" value={formData.email}
            onChange={handleChange}
            isInvalid={!!error.email}
          />
          <Form.Control.Feedback type="invalid">
            {error.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" placeholder="Message" rows={3} value={formData.message} onChange={handleChange}
          isInvalid={!!error.message} />
          <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="secondary">Submit</Button>
      </Form>
    </section>
  );
};

export default Contact;
