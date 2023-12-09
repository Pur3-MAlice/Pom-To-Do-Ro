import React from 'react';
import { Button } from 'react-bootstrap'

function PlayButton(props) {
    return (
      <Button {...props}>
        <i class="fa-solid fa-play"></i>
      </Button>
    );
  }
  
  export default PlayButton;

