import React, { useState, useEffect } from "react";
// comps
import ConfForm from "./form_confForm";
import ConfirmationToast from "../views/confirmationToast";
import Header from "../views/header";
// utils
import connect from "../../utils/connect";
import getNewId from "../../utils/getNewId";
// ui
import Container from "react-bootstrap/Col";

const ConformForm = () => {
  //* Data
  const [nextId, setNextId] = useState();
  const [errorOnConnection, setErrorOnConnection] = useState(false);
  ///
  useEffect(() => {
    let mounted = true;
    connect("non-conformities", "GET").then((items) => {
      if (mounted && items.success) {
        setNextId(getNewId(items.message));
      } else if (mounted && items.success === false) {
        setErrorOnConnection(true);
      }
    });
    return () => (mounted = false);
  });

  // * View
  return (
    <>
      <Header title={"Adicionar não conformidade"} />
      <Container className="m-2">
        {errorOnConnection ? (
          <ConfirmationToast
            success={false}
            message={"Erro de conexão. Verifique se o backend está online."}
          />
        ) : null}
        <ConfForm nextId={nextId} />
      </Container>
    </>
  );
};

export default ConformForm;
