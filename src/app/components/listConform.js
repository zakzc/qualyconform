import React, { useEffect, useState } from "react";
// comps
import ActionForm from "./actionForm";
// utils
import connect from "../utils/connect";
// ui
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

const ListConform = () => {
  //* Data
  const [orderedList, setOrderedList] = useState([]);
  const [errorOnConnection, setErrorOnConnection] = useState(false);
  ///
  useEffect(() => {
    let mounted = true;
    connect("non-conformities", "GET").then((items) => {
      if (mounted && items.success) {
        setOrderedList(
          items.message.sort((a, b) =>
            a["ocurrence-date"] > b["ocurrence-date"] ? -1 : 1
          )
        );
      } else {
        setErrorOnConnection(true);
      }
    });
    return () => (mounted = false);
  }, []);
  ///

  //* View
  return (
    <>
      <Jumbotron>
        <h1> Lista de não conformidades</h1>
      </Jumbotron>
      {errorOnConnection ? (
        <h3 className="m-5 text-warning">
          Erro de conexão. Verifique se o backend está online.
        </h3>
      ) : null}
      <Container className="m-2">
        {orderedList.map((c, i) => (
          <Card className="m-1" key={i}>
            <Card.Header>
              <Row>
                <Col>{c["ocurrence-date"]}</Col>
                <Col>
                  <Row>
                    {c["departments"].map((id, i) => {
                      if (id === 1)
                        return (
                          <span key={i} className="m-1">
                            Qualidade
                          </span>
                        );
                      if (id === 2)
                        return (
                          <span key={i} className="m-1">
                            Gerência
                          </span>
                        );
                      if (id === 3)
                        return (
                          <span key={i} className="m-1">
                            Vendas
                          </span>
                        );
                      return null;
                    })}
                  </Row>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>{c.description}</Card.Body>
            <Dropdown className="m-2">
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Plano de ação
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <ActionForm currentListItem={c} />
              </Dropdown.Menu>
            </Dropdown>
          </Card>
        ))}
      </Container>
    </>
  );
};
export default ListConform;
