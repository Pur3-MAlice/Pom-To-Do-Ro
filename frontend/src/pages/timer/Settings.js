import React, { useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";
import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Timer.module.css"


// Inspired by the tutorials of Aleks Popovic & Coding With Dawid
function Settings() {
  const settingsInfo = useContext(SettingsContext);

  const handleInputChange = (e, setterFunction) => {
    const value = e.target.value;
    setterFunction(value);
  };

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
            className={styles.inputStyle}
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
            className={styles.inputStyle}
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
            className={styles.inputStyle}
          />
        </label>
      </Col>
      </Row>
    </>
  );
}

export default Settings;
