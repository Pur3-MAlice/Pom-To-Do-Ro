import React from "react";
import { Button } from "react-bootstrap";

function AddButton(props) {
  return (
    <Button {...props}>
      <i className="fa-solid fa-plus"></i>
    </Button>
  );
}

export default AddButton;
