import React from "react";
import { Form, Button } from "react-bootstrap/";

export default function Contact() {
  return (
    <section className="contact-container">
      <Form className="col-10 py-3 px-5 mt-4 contact-form"
        target="_blank" action="https://formsubmit.co/nickedwards.dev@gmail.com" method="POST">
        <Form.Group className="mb-3" controlId="Form.ControlInput-Name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" name="name" placeholder="Let me know who you are!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput-Email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" name="email" placeholder="And shoot me your email so I can reply!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput-Message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" name="message" rows={3} placeholder="You can compose your message here or use the email link in the footer. Looking forward to hearing from you!"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check required type="checkbox" label="I'm not a robot" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
