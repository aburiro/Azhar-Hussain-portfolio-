// Contact.js
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please feel free to get in touch with us.</p>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </div>
  );
};

export default Contact;
