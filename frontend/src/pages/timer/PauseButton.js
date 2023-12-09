import React from 'react';
import { Button } from 'react-bootstrap'

function PauseButton(props) {
    return (
      <Button {...props}>
        <i class="fa-solid fa-pause"></i>
      </Button>
    );
  }
  
  export default PauseButton;