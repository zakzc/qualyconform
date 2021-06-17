import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// comps
import ConfirmationToast from "./confirmationToast";
// utils
import connect from "../utils/connect";
import getNewId from "../utils/getNewId";
import handleList from "../utils/handleList";
import validate from "../utils/validateList";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// icons
import { PlusCircle } from "react-bootstrap-icons";
import { XCircle } from "react-bootstrap-icons";

const ConformForm = () => {
  //* Data
  const [showMessage, setShowMessage] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [nextId, setNextId] = useState();
  const [errorOnConnection, setErrorOnConnection] = useState(false);
  ///
  useEffect(() => {
    let mounted = true;
    connect("non-conformities", "GET").then((items) => {
      if (mounted && items.success) {
        setNextId(getNewId(items.message));
      } else {
        setErrorOnConnection(true);
      }
    });
    return () => (mounted = false);
  });
  ///
  const formik = useFormik({
    initialValues: {
      date: "",
      departments: [],
      description: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      try {
        const newData = handleList(values, nextId);
        console.log("newData from handler:", newData);
        connect("non-conformities", "POST", newData);
        setShowMessage(true);
        resetForm({});
      } catch (error) {
        setConnectionError(true);
        console.log("error:", error);
      }
    },
  });

  // * View
  return (
    <>
      <Jumbotron>
        <h1> Adicionar não conformidade </h1>
      </Jumbotron>
      <Container className="m-2">
        {errorOnConnection ? (
          <h3 className="m-5 text-warning">
            Erro de conexão. Verifique se o backend está online.
          </h3>
        ) : null}
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Date"
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="text-danger">{formik.errors.date}</div>
              ) : null}
            </Col>
            <Col>
              <Form.Group
                as={Col}
                role="group"
                controlId="checkbox-group"
                id="checkbox-group"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.departments}
              >
                <div className="mb-3">
                  <Form.Check
                    inline
                    type="checkbox"
                    label="Qualidade"
                    name="departments"
                    value="1"
                  />
                  <Form.Check
                    type="checkbox"
                    inline
                    label="Gerência"
                    name="departments"
                    value="2"
                  />
                  <Form.Check
                    type="checkbox"
                    inline
                    label="Vendas"
                    name="departments"
                    value="3"
                  />
                </div>
                {formik.touched.departments && formik.errors.departments ? (
                  <div className="text-danger">{formik.errors.departments}</div>
                ) : null}
              </Form.Group>
            </Col>
          </Row>

          <Form.Control
            className="mt-3"
            as="textarea"
            rows={3}
            placeholder="Description"
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />

          {formik.touched.description && formik.errors.description ? (
            <div className="text-danger">{formik.errors.description}</div>
          ) : null}
          <Row>
            <Col>
              <Button size="lg" className="mt-4" variant="info" type="submit">
                <PlusCircle />
              </Button>
            </Col>
            <Col className="m-2">
              {showMessage ? <ConfirmationToast /> : null}
              {connectionError ? (
                <>
                  <h3 className="text-danger">
                    <XCircle className="mr-2" />
                    Falha na inserção de dados
                  </h3>
                </>
              ) : null}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default ConformForm;
