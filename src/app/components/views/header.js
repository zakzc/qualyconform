import React from "react";
/// ui
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = ({ title }) => {
  return (
    <Jumbotron>
      <h1> {title} </h1>
    </Jumbotron>
  );
};
export default Header;
