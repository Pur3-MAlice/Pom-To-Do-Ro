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

  // const handleHabitCreated = (newHabit) => {
  //   console.log("handleHabitCreated called with HABITTRACKER:", newHabit);
    
  //   setHabits((prevHabits) => ({
  //     ...prevHabits,
  //     results: [...prevHabits.results, newHabit],
  //   }));

  //   if (onHabitCreated) {
  //     onHabitCreated(newHabit);
  //     console.log("onHabitCreated called");
  //   }
  // };

  return (
    <>
      {hasLoaded ? (
        <>
          {habits.results.length ? (
            <Table
              striped
              bordered
              hover
              variant="dark"
              style={{ color: "white" }}
            >
              <thead>
                <tr>
                  <th>Habit</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                  <th>Su</th>
                </tr>
              </thead>
              <tbody>
                {habits.results.map((habit) => (
                  <Habit
                    key={habit.id}
                    {...habit}
                    onHabitDeleted={handleHabitDeleted}
                    onHabitCreated={handleHabitCreated}
                  />
                ))}
              </tbody>
            </Table>
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