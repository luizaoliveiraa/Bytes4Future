//queremos fazer isso dinamico, logo precisamos um texto como prop

import { Button } from "bootstrap";
import { useState } from "react";

export const Alert = ({ props }) => {
  return <div className="alert alert-primary">{props}</div>;
};

//criando um alerta que dê para fechar depois

export function AlertDismissing() {
  return (
    <div class="alert alert-warning alert-dismissing" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export function AlertClosingOnClick() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div class="alert alert-primary alert-dismissible" role="alert">
      {alertVisible && <Alert>My alert</Alert>}
      <button color="primary" onClick={() => setAlertVisibility(true)}></button>
    </div>
  );
}
