import React, { useState } from "react";
import { useFormik } from "formik";
// comps
import ConfirmationToast from "./confirmationToast";
// utils
import validate from "../utils/validateAction";
import handleActions from "../utils/handleActions";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ActionForm = () => {
  const [confirm, setConfirm] = useState(false);
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
      const newData = handleActions(values);
      console.log("form:", newData, newData.id);
      setConfirm(true);
    },
  });
  return (
    <>
      <Container className="m-2">
        <Form onSubmit={formik.handleSubmit}>
          <h2 className="mt-3 mb-3 text-info text-center">Ações corretivas</h2>
          <Form.Control
            className="mt-1 mb-1"
            placeholder="O que fazer"
            as="textarea"
            rows={3}
            id="what"
            name="what"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.what}
          />
          {formik.touched.what && formik.errors.what ? (
            <div className="text-danger">{formik.errors.what}</div>
          ) : null}
          <Form.Control
            className="mt-1 mb-1"
            placeholder="Por que fazer"
            as="textarea"
            rows={3}
            id="why"
            name="why"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.why}
          />
          {formik.touched.why && formik.errors.why ? (
            <div className="text-danger">{formik.errors.why}</div>
          ) : null}
          <Form.Control
            className="mt-1 mb-1"
            placeholder="Como fazer"
            as="textarea"
            rows={3}
            id="how"
            name="how"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.how}
          />
          {formik.touched.how && formik.errors.how ? (
            <div className="text-danger">{formik.errors.how}</div>
          ) : null}
          <Row>
            <Col>
              <Form.Control
                placeholder="Onde fazer"
                as="textarea"
                id="where"
                name="where"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.where}
              />
              {formik.touched.where && formik.errors.where ? (
                <div className="text-danger">{formik.errors.where}</div>
              ) : null}
            </Col>

            <Col>
              <span>Até quando</span>
              <Form.Control
                placeholder="Até quando"
                id="until"
                label="Até quando"
                name="until"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.until}
              />
              {formik.touched.until && formik.errors.until ? (
                <div className="text-danger">{formik.errors.until}</div>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="lg" className="mt-4" variant="info" type="submit">
                Adicionar
              </Button>
            </Col>
            <Col className="m-4"> {confirm ? <ConfirmationToast /> : null}</Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default ActionForm;
