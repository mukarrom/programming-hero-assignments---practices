import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="col-10 col-md-6 col-xxl-4 mx-auto shadow py-4">
      <div className="text-center">
        <h2 className="fw-bold text-primary">Connect with Me</h2>
        <p style={{ color: "gray" }}>
          To Any farther information and question connect with us here.
        </p>
      </div>
      <div
        style={{ width: "150px", height: "2px" }}
        className="bg-primary mx-auto"
      ></div>
      <div className="w-75 mx-auto my-4">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter Your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write us</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
