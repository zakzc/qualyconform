import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <NavbarBrand>
        <div className="infoText">Quality Conform</div>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/conformForm" className="text-white">
            Adicionar
          </Nav.Link>
          <Nav.Link href="/listConform" className="text-white">
            Lista
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
