import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// comps
import ConfirmationToast from "./confirmationToast";
import getNewId from "../utils/getNewId";
// utils
import connect from "../utils/connect";
import validate from "../utils/validateAction";
import handleActions from "../utils/handleActions";
import handleListUpdate from "../utils/handleListUpdate";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ActionForm = ({ currentListItem }) => {
  //* Data
  const [confirm, setConfirm] = useState(false);
  const [newId, setNewId] = useState();
  const [connectionError, setConnectionError] = useState(false);
  ///
  useEffect(() => {
    let mounted = true;
    connect("corrective-actions", "GET").then((items) => {
      if (mounted) {
        setNewId(getNewId(items.message));
      }
    });
    return () => (mounted = false);
  });
  ///
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
      try {
        const newData = handleActions(values, newId);
        const updatedList = handleListUpdate(currentListItem, newId);
        console.log("newData from handler:", newData);
        connect("corrective-actions", "POST", newData);
        connect("/non-conformities/" + currentListItem.id, "PUT", updatedList);
        setConfirm(true);
      } catch (error) {
        setConnectionError(true);
        console.log("error:", error);
      }
    },
  });

  //* View
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
            <Col className="m-4">
              {confirm ? <ConfirmationToast /> : null}{" "}
              {connectionError ? (
                <h4 className="text-danger">Falha na inserção de dados</h4>
              ) : null}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default ActionForm;
