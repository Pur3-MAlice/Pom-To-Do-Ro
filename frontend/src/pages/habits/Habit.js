import { Button, Card } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/HabitList.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";

const Habit = (props) => {
  const {
    id,
    owner,
    title,
    // completed,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/habits/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/habits/${id}/`);
    } catch (err) {
      console.log(err);
    }
  };

  // Render the card only if is_owner is true
  if (!is_owner) {
    return null;
  }

  return (
    <Card className={styles.HabitCard}>
      <Card.Body className={styles.HabitCard}>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
      </Card.Body>
      <Button onClick={handleDelete}>Delete</Button>
      <div></div>
      <Button onClick={handleEdit}>Edit</Button>
    </Card>
  );
};

export default Habit;