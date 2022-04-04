import React from "react";
import { Form, Button } from "react-bootstrap/";

export default function Contact() {
  return (
    <section className="contact-container">
      <Form className="col-10 py-3 px-5 mt-4 contact-form">
        <Form.Group className="mb-3" controlId="Form.ControlInput-Name">
            <p>Please note: This form is not yet functional! (The backend is still under construction.) Please use the email link in the footer to send me a message. Thanks! <br />- N</p>
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Who's writing?" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput-Email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Provide me your email so I can reply!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput-Message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" rows={3} placeholder="Compose your message here. Looking forward to hearing from you!"/>
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
