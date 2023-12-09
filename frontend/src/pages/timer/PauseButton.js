import React from 'react';
import { Button } from 'react-bootstrap'

function PauseButton(props) {
    return (
      <Button {...props}>
        <i className="fa-solid fa-pause"></i>
      </Button>
    );
  }
  
  export default PauseButton;