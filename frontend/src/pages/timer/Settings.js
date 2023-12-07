import React, { useContext } from "react";
import SettingsContext from "./SettingsContext";
import { Row, Col } from "react-bootstrap";

function Settings() {
  const settingsInfo = useContext(SettingsContext);

  const handleInputChange = (e, setterFunction) => {
    const value = e.target.value;
    setterFunction(value);
  };

  const inputStyle = {
    width: '4em', // Adjust the width to make the input square
    padding: '.8em', // Adjust padding for spacing
    borderRadius: '5px', // Add border-radius for rounded corners (optional)
    border: '1px solid #fff', // Add border for visual separation
    background: 'transparent', // Set background to transparent
    color: '#fff', // Set font color to white
    appearance: 'none', // Hide default arrows
    overflow: 'hidden', // Hide overflow to prevent clipping
    fontSize: '1.2em',
}


  return (
    <>
    <Row>
      <Col>
        <label>
          <input
            type="number"
            value={settingsInfo.workMinutes}
            onChange={(e) => handleInputChange(e, settingsInfo.setWorkMinutes)}
            min={1}
            max={120}
            style={inputStyle}
          />
        </label>
      </Col>
      <Col>
        <label>
          <input
            type="number"
            value={settingsInfo.breakMinutes}
            onChange={(e) => handleInputChange(e, settingsInfo.setBreakMinutes)}
            min={1}
            max={30}
            style={inputStyle}
          />
        </label>
      </Col>
      <Col>
        <label>
          <input
            type="number"
            value={settingsInfo.longMinutes}
            onChange={(e) => handleInputChange(e, settingsInfo.setLongMinutes)}
            min={1}
            max={60}
            style={inputStyle}
          />
        </label>
      </Col>
      </Row>
    </>
  );
}

export default Settings;
