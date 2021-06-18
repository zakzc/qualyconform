import React, { useEffect, useState } from "react";
// comps
import Header from "../views/header";
import ConfirmationToast from "../views/confirmationToast";
import ListConf from "./list_listConf";
// utils
import connect from "../../utils/connect";

const ListConform = () => {
  //* Data
  const [errorOnConnection, setErrorOnConnection] = useState(false);
  const [orderedList, setOrderedList] = useState([]);
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
      <Header title={"Lista de não conformidades"} />
      {errorOnConnection ? (
        <ConfirmationToast
          success={false}
          message={"Erro de conexão. Verifique se o backend está online."}
        />
      ) : null}
      <ListConf orderedList={orderedList} />
    </>
  );
};
export default ListConform;
