import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/HabitList.module.css";
import DeleteButton from "./DeleteButton";
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


  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/habits/${id}/`);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  // Render the card only if is_owner is true
  if (!is_owner) {
    return null;
  }

  return (
    <>
      <tr>
        <td className={styles.ButtonContainer}>
          {title}
          <div>
            <DeleteButton onClick={handleDelete} className={`${styles.Button} ${styles.DeleteButton}`}>
                Delete
            </DeleteButton>
          </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
};

export default Habit;
