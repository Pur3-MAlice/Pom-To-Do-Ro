import React from 'react';
import { Button } from 'react-bootstrap'

function DeleteButton(props) {
    return (
      <Button {...props}>
        <i className="fa-solid fa-xmark"></i>
      </Button>
    );
  }
  
  export default DeleteButton;