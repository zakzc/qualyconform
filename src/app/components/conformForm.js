import React from "react";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ConformForm = () => {
  return (
    <>
      <Jumbotron>
        <h1> Formulário de não conformidades </h1>
      </Jumbotron>
      <Container className="m-2">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Data" />
            </Col>
            <Col>
              <Form.Control placeholder="Departamentos" />
            </Col>
          </Row>
          <Form.Control
            className="mt-3"
            as="textarea"
            rows={3}
            placeholder="Descrição da não conformidade"
          />
          <h2 className="mt-3"> Ações corretivas </h2>
          <Form.Control
            className="mt-1 mb-1"
            placeholder="O que fazer:"
            as="textarea"
            rows={3}
          />
          <Form.Control
            className="mt-1 mb-1"
            placeholder="Por que fazer:"
            as="textarea"
            rows={3}
          />
          <Form.Control
            className="mt-1 mb-1"
            placeholder="Como fazer:"
            as="textarea"
            rows={3}
          />
          <Row>
            <Col>
              <Form.Control placeholder="Onde fazer" />
            </Col>
            <Col>
              <Form.Control placeholder="Até quando" />
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default ConformForm;
