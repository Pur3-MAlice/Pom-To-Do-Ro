import React, {useState } from "react";
import { Row, Col, Modal, Button} from "react-bootstrap";
import HabitsTracker from './HabitsTracker';
import CreateHabit from "./CreateHabit";
import appStyles from "../../../src/App.module.css"
import styles from "../../styles/HabitList.module.css";
import CreateButton from "./AddButton.js";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HabitManager = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const history = useHistory();
    const handleCreate = async () => {
        try {
          
          history.push('/');
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <>
    <CreateButton onClick={handleCreate} className={styles.Button}/>
      <div className={`${appStyles.Title}`}>
        <h3>My Habits:</h3>
      </div>
      <Row className={`justify-content-md-center`}>
        <Col>
            <HabitsTracker />
        </Col>
      </Row>
<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HabitManager;