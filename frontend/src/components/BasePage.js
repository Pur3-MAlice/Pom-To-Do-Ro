import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BasePage = () => {
  return (
    <>
      <Row noGutters>
        <Col sm={12} md={5} style={{ height: '415px', border: '1px solid black', padding: '0' }}>
          Content for Div 1
        </Col>
        <Col sm={12} md={7} style={{ height: '615px', border: '1px solid black', padding: '0' }}>
          Content for Div 2
        </Col>
      </Row>
      <Row noGutters>
        <Col sm={12} md={5} style={{ 
            height: '300px', 
            border: '1px solid black', 
            padding: '0',
            position: 'absolute',
            left: '0px',
            bottom: '0px', 
            }}>
          Content for Div 3
        </Col>
        <Col sm={12} md={7} style={{ 
            height: '100px', 
            border: '1px solid black', 
            padding: '0',
            position: 'absolute',
            right: '0px',
            bottom: '0px',
            }}>
          Content for Div 4
        </Col>
      </Row>
    </>
  );
};

export default BasePage;