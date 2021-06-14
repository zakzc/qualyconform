import React from "react";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ConformForm = () => {
  return (
    <>
      <Jumbotron>
        <h1> Non conformity Form </h1>
      </Jumbotron>
      <Container className="m-2">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Data" />
            </Col>
            <Col>
              <Form.Group as={Col} controlId="formGridState">
                <div className="mb-3">
                  <Form.Check inline label="Quality" name="quality" />
                  <Form.Check inline label="Management" name="management" />
                  <Form.Check inline label="Sales" name="sales" />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Form.Control
            className="mt-3"
            as="textarea"
            rows={3}
            placeholder="Description"
          />
          <h2 className="mt-3"> Corrective actions </h2>
          <Form.Control
            className="mt-1 mb-1"
            placeholder="What to do"
            as="textarea"
            rows={3}
          />
          <Form.Control
            className="mt-1 mb-1"
            placeholder="Why to do it"
            as="textarea"
            rows={3}
          />
          <Form.Control
            className="mt-1 mb-1"
            placeholder="How to do it"
            as="textarea"
            rows={3}
          />
          <Row>
            <Col>
              <Form.Control placeholder="where to do it" />
            </Col>
            <Col>
              <Form.Control placeholder="Until when" />
            </Col>
          </Row>
          <Button size="lg" className="mt-4" variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default ConformForm;
