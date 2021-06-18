import React, { useEffect, useState } from "react";
// ui
import Table from "react-bootstrap/Table";
// utils
import connect from "../../utils/connect";

const ActionPrevious = ({ actions }) => {
  // * data
  const [previousActions, setPreviousActions] = useState([]);
  useEffect(() => {
    let mounted = true;
    connect("corrective-actions", "GET").then((items) => {
      if (mounted && items.success) {
        setPreviousActions(items.message);
      }
    });
    return () => (mounted = false);
  }, []);

  // * views
  const ListOfActions = () => {
    return (
      <>
        {previousActions
          .filter((f) => actions.includes(f.id))
          .map((i, k) => (
            <Table key={k} striped bordered hover>
              <thead>
                <tr>
                  <th>O que</th>
                  <th>Por que</th>
                  <th>Como</th>
                  <th>Onde</th>
                  <th>Até quando</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {i["what-to-do"]}</td>
                  <td> {i["why-to-do-it"]}</td>
                  <td> {i["how-to-do-it"]}</td>
                  <td> {i["where-to-do-it"]}</td>
                  <td> {i["until-when"]}</td>
                </tr>
              </tbody>
            </Table>
          ))}
      </>
    );
  };

  // * view
  return (
    <>
      {actions.length > 0 ? (
        <>
          <h4>Ações definidas:</h4>
          <ListOfActions />
        </>
      ) : (
        <h4>Nenhuma ação definida ou ação ainda em processamento</h4>
      )}
    </>
  );
};

export default ActionPrevious;
