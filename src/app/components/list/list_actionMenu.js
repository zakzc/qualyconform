import React from "react";
// comps
import ActionForm from "./list_actionForm";
import ActionPrevious from "./list_actionPrevious";
// ui
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";

const ActionMenu = ({ currentItem }) => {
  return (
    <>
      <Row>
        <Col>
          <Dropdown className="m-2" size="md">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Adicionar ação
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ActionForm currentListItem={currentItem} />
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown className="m-2" size="md">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Ações registradas
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ActionPrevious actions={currentItem["corrective-actions"]} />
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col></Col> <Col></Col>
      </Row>
    </>
  );
};

export default ActionMenu;
