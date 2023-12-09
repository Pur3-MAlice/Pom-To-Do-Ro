import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/HabitList.module.css";
import DeleteButton from "./DeleteButton";
import { axiosRes } from "../../api/axiosDefaults";

const Habit = (props) => {
  const {
    id,
    owner,
    title,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/habits/${id}/`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
