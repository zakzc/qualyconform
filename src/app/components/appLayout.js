import React from "react";
// ui
import Container from "react-bootstrap/Container";
/// comps
import Navigation from "./views/navigation";
import Routes from "./routes";

const AppLayout = () => {
  return (
    <Container fluid="*" className="h-100 mt-0 mb-0 p-0">
      <Navigation />
      <Routes />
    </Container>
  );
};

export default AppLayout;
