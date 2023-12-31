import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/HabitList.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import DeleteButton from "./DeleteButton";

const Habit = ({ id, owner, title, monday, tuesday, wednesday, thursday, friday, saturday, sunday, onHabitDeleted }) => {
  const [checkboxStates, setCheckboxStates] = useState({
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  });

  useEffect(() => {
    setCheckboxStates({
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    });
  }, [monday, tuesday, wednesday, thursday, friday, saturday, sunday]);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleCheckboxChange = async (day) => {
    setCheckboxStates((prevStates) => {
      const updatedStates = { ...prevStates, [day]: !prevStates[day] };
      return updatedStates;
    });

    try {
    await axiosReq.patch(`/habits/${id}/`, {
      [day]: !checkboxStates[day],
    });
  } catch (err) {
    console.log("Error updating checkbox:", err);
  }
  };

  const handleDelete = async () => {
    try {
      await axiosReq.delete(`/habits/${id}/`);
      onHabitDeleted(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    {is_owner && (
    <tr>
      <td className={`${styles.ButtonContainer} ${styles.Check}`}>
        {title}
        <div>
          <DeleteButton
            onClick={handleDelete}
            className={`${styles.Button} ${styles.DeleteButton}`}
          >
            Delete
          </DeleteButton>
        </div>
      </td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.monday} onChange={() => handleCheckboxChange("monday")} /></td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.tuesday} onChange={() => handleCheckboxChange("tuesday")} /></td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.wednesday} onChange={() => handleCheckboxChange("wednesday")} /></td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.thursday} onChange={() => handleCheckboxChange("thursday")} /></td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.friday} onChange={() => handleCheckboxChange("friday")} /></td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.saturday} onChange={() => handleCheckboxChange("saturday")} /></td>
      <td className={styles.Check}><input type="checkbox" checked={checkboxStates.sunday} onChange={() => handleCheckboxChange("sunday")} /></td>
    </tr>
    )}
    </>
  );
};

export default Habit;