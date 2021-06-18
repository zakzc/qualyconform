import React from "react";
// comps
import ActionMenu from "./list_actionMenu";
// ui
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ListConf = ({ orderedList }) => {
  return (
    <Container className="m-2">
      {orderedList.map((item, i) => (
        <Card className="m-3" key={i}>
          <Card.Header>
            <Row>
              <Col>{item["ocurrence-date"]}</Col>
              <Col>
                <Row>
                  {item["departments"].map((id, i) => {
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
              <Col></Col> <Col></Col>
            </Row>
          </Card.Header>
          <Card.Body>{item.description}</Card.Body>
          <ActionMenu currentItem={item} />
        </Card>
      ))}
    </Container>
  );
};
export default ListConf;
