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

  return (
    <>
      <Jumbotron>
        <h1> List of non conformities</h1>
      </Jumbotron>
      <Container className="m-2">
        {orderedTestList.map((c, i) => (
          <ListGroup key={i} className="m-2">
            <Row>
              <Col>
                <ListGroup.Item className="m-1">
                  {c["ocurrence-date"]}
                </ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item>
                  <Row>
                    {c["departments"].map((id, i) => {
                      if (id === 1)
                        return (
                          <span key={i} className="m-1">
                            Quality
                          </span>
                        );
                      if (id === 2)
                        return (
                          <span key={i} className="m-1">
                            Management
                          </span>
                        );
                      if (id === 3)
                        return (
                          <span key={i} className="m-1">
                            Sales
                          </span>
                        );
                      return null;
                    })}
                  </Row>
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
