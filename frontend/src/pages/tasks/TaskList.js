import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Task from "./Task";
import appStyles from "../../App.module.css";

import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function TasksPage({ message, filter = "" }) {
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}`);
        setTasks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchTasks();
  }, [filter, pathname]);

  const handleTaskDeleted = (deletedTaskId) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      results: prevTasks.results.filter((task) => task.id !== deletedTaskId),
    }));
  };

  return (
    <>
      {hasLoaded ? (
        <>
          {tasks.results.length ? (
            tasks.results.map((task) => (
              <Task 
              key={task.id} 
              {...task} 
              onTaskDeleted={handleTaskDeleted}
              />
            ))
          ) : (
            <Container style={{ color: "white" }}>
              <h1 style={{ color: "white" }}>Add Task</h1>
            </Container>
          )}
        </>
      ) : (
        <Container className={appStyles.Content}>
          <h1>Loading</h1>
        </Container>
      )}
    </>
  );
}

export default TasksPage;
