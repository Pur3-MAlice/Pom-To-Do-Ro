import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

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

  return (
    <>
      {hasLoaded ? (
        <>
          {habits.results.length ? (
            habits.results.map((habit) => (
              <Habit key={habit.id} {...habit} setHabits={setHabits} />
            ))
          ) : (
            <Container className={styles.Content} style={{color: "black",}}>
              <h1>Sad nothing here </h1>
            </Container>
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