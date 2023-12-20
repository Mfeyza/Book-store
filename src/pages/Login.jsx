import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom"


const Login = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='mx-auto w-25 py-5 flex-grow-1'>
      <Col className="my-5 mx-auto ">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Kullanıcı Adı:</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue="Clarusway"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Şifre</Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue="FS15"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Col>
     
      <div className='d-flex flex-row'>
      <Button className="button1 mx-auto d-flex justify-content-center" type="submit"onClick={() => navigate("/Payy")}>Giriş</Button>
      <Button className="button mx-auto d-flex justify-content-center" variant="primary"onClick={() => navigate("/")}>Geri</Button>
      </div>
      
    </Form>
  );
}

export default Login