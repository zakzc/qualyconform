import React from "react";
import { useFormik } from "formik";
// utils
import validate from "../utils/validate";
import handleData from "../utils/handleData";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ActionForm = () => {
  const formik = useFormik({
    initialValues: {
      what: "",
      how: "",
      why: "",
      where: "",
      until: "",
    },
    validate,
    onSubmit: (values) => {
      const newData = handleData(values);
      console.log("returns:", newData);
    },
  });
  return (
    <>
      <Container className="m-2">
        <Form onSubmit={formik.handleSubmit}>
          <h2 className="mt-3 mb-3 text-info text-center">Ações corretivas</h2>
          <Form.Control
            className="mt-1 mb-1"
            placeholder="What to do"
            as="textarea"
            rows={3}
            id="what"
            name="what"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.what}
          />
          {formik.errors.what ? (
            <div className="text-danger">{formik.errors.what}</div>
          ) : null}
          <Form.Control
            className="mt-1 mb-1"
            placeholder="Why to do it"
            as="textarea"
            rows={3}
            id="why"
            name="why"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.why}
          />
          {formik.errors.why ? (
            <div className="text-danger">{formik.errors.why}</div>
          ) : null}
          <Form.Control
            className="mt-1 mb-1"
            placeholder="How to do it"
            as="textarea"
            rows={3}
            id="how"
            name="how"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.how}
          />
          {formik.errors.how ? (
            <div className="text-danger">{formik.errors.how}</div>
          ) : null}
          <Row>
            <Col>
              <Form.Control
                placeholder="where to do it"
                as="textarea"
                id="where"
                name="where"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.where}
              />
              {formik.errors.where ? (
                <div className="text-danger">{formik.errors.where}</div>
              ) : null}
            </Col>

            <Col>
              <Form.Control
                placeholder="Until when"
                as="textarea"
                id="until"
                name="until"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.until}
              />
              {formik.errors.until ? (
                <div className="text-danger">{formik.errors.until}</div>
              ) : null}
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
export default ActionForm;
