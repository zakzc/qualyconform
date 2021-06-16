import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

const ConfirmationToast = () => {
  // * data
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  // * view
  return (
    <Toast show={showA} onClose={toggleShowA}>
      <Toast.Header className="bg-info shadow-1-strong">
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto text-white">
          Dados Alterados com sucesso
        </strong>
      </Toast.Header>
    </Toast>
  );
};

export default ConfirmationToast;
