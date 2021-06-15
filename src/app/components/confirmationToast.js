import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

const ConfirmationToast = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Toast show={showA} onClose={toggleShowA}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Dados Alterados</strong>
      </Toast.Header>
      <Toast.Body> Dados inseridos com sucessso</Toast.Body>
    </Toast>
  );
};

export default ConfirmationToast;
