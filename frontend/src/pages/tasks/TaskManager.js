import { Row, Col } from "react-bootstrap";
import TaskList from './TaskList';

import styles from '../../styles/TaskManager.module.css';

const TaskManager = () => {

  return (
    <>
      <div className={styles.Title}>
        <h3>My Tasks:</h3>
      </div>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col md={7} lg={8}>
            <TaskList />
        </Col>
      </Row>
    </>
  );
};

export default TaskManager;