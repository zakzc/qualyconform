import React from "react";
// ui
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
// base data
import testList from "../baseData/testList.json";

const ListConform = () => {
  const orderedTestList = testList["non-conformities"].sort((a, b) =>
    a["ocurrence-date"] > b["ocurrence-date"] ? -1 : 1
  );
  console.log("t", orderedTestList);

  return (
    <>
      <Jumbotron>
        <h1> Lista de não conformidades </h1>
      </Jumbotron>
      <Container className="m-2">
        {orderedTestList.map((c) => (
          <ListGroup className="m-2">
            <Row>
              <Col>
                <ListGroup.Item>{c["ocurrence-date"]}</ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item>
                  {c["departments"].map((id) => {
                    if (id === 1) return "Quality ";
                    if (id === 2) return "Management ";
                    if (id === 3) return "Sales ";
                    return null;
                  })}
                </ListGroup.Item>
              </Col>
            </Row>
            <ListGroup.Item className="mt-2">{c.description}</ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </>
  );
};
export default ListConform;
