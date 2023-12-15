import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Habit from "./Habit";
import styles from "../../styles/HabitList.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function HabitsTracker({ message, filter = "" }) {
  const [habits, setHabits] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const { data } = await axiosReq.get(`/habits/?${filter}`);
        setHabits(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchHabits();
  }, [filter, pathname]);

  const handleHabitDeleted = (deletedHabitId) => {
    setHabits((prevHabits) => ({
      ...prevHabits,
      results: prevHabits.results.filter((habit) => habit.id !== deletedHabitId),
    }));
  };

  return (
    <>
      {hasLoaded ? (
        <>
          {habits.results.length ? (
            <div className={styles.Table}>
              <Table
                striped
                bordered
                hover
                variant="dark"
                style={{ color: "white" }}
                className={styles.Table}
              >
                <thead>
                  <tr>
                    <th className="styles.Check">Habit</th>
                    <th className="styles.Check">M</th>
                    <th className="styles.Check">T</th>
                    <th className="styles.Check">W</th>
                    <th className="styles.Check">T</th>
                    <th className="styles.Check">F</th>
                    <th className="styles.Check">S</th>
                    <th className="styles.Check">S</th>
                  </tr>
                </thead>
                <tbody>
                  {habits.results.map((habit) => (
                    <Habit
                      key={habit.id}
                      {...habit}
                      onHabitDeleted={handleHabitDeleted}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <h5 style={{ textAlign: "center", color: "white" }}>
              You've not added any Habits yet
            </h5>
          )}
        </>
      ) : (
        <Container className={styles.Content}>
          <h1>Loading</h1>
        </Container>
      )}
    </>
  );
}

export default HabitsTracker;