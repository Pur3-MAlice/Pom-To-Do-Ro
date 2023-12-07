import React, { useEffect, useCallback, useState } from "react";

import {
  Button,
  Form,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from '../../styles/BasePage.module.css';

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import NavBar from "../../components/NavBar";
import PomodoroTimer from "../timer/PomodoroTimer";
import HabitsTracker from "../habits/HabitsTracker";

const TaskEditForm = () => {
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    due: "",
    urgent: "",
    important: "",
    category: "",
  });

  const { title, content, due, urgent, important, category } = taskData;

  const [selectedDate, setSelectedDate] = useState(null);

  const history = useHistory();
  const { id } = useParams();

  const [successMessage, setSuccessMessage] = useState("");

  const [categories, setCategories] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);

  const handleDate = (date) => {
    setSelectedDate(date);
    setTaskData({
      ...taskData,
      due: date.toISOString(),
    });
  };

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosReq.get("/categories/");
      if (response.data?.results) {
        setCategories(
          response.data.results.map((category) => ({
            id: category.id,
            title: category.title,
            owner: category.owner,
            is_owner: category.is_owner,
          }))
        );
        console.log("categories got", setCategories);
      } else {
        console.error("Invalid response format for categories:", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/${id}/`);
        const { title, content, due, urgent, important, category } = data;

        const parsedDue = due ? new Date(due) : null;

        setTaskData({
          title,
          content,
          due: parsedDue,
          urgent,
          important,
          category: category ? category.id : null,
        });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setTaskData({
      ...taskData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    console.log(currentUser?.username);

    formData.append("title", title);
    formData.append("content", content);
    formData.append("due", due);
    formData.append("urgent", urgent);
    formData.append("important", important);
    formData.append("category", category);

    try {
      await axiosReq.put(`/tasks/${id}/`, formData);
      history.push(`/tasks/${id}`);
      setSuccessMessage("Task edited!");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  if (loadingCategories) {
    return <p>Loading categories...</p>;
  }
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Check
        type="checkbox"
        id="important"
        label="Important"
        name="important"
        checked={important}
        onChange={handleChange}
      />

      <Form.Check
        type="checkbox"
        id="urgent"
        label="Urgent"
        name="urgent"
        checked={urgent}
        onChange={handleChange}
      />

      <Form.Group>
        <Form.Label>due</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
        />
      </Form.Group>
      {errors?.due?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Category: </Form.Label>
        <Form.Control
          as="select"
          custom
          name="category"
          value={category}
          onChange={(event) =>
            setTaskData({ ...taskData, category: event.target.value })
          }
        >
          <option value="">Category...</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.title}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
        <Button onClick={() => history.goBack()}>cancel</Button>
        <Button type="submit">create</Button>
    </div>
  );

  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col
          sm={12}
          md={4}
          style={{ height: "415px", border: "1px solid black", padding: "0" }}
        >
          <PomodoroTimer />
        </Col>
        <Col
          sm={12}
          md={8}
          style={{ height: "635px", border: "1px solid black", padding: "0" }}
        >
          Edit Task {taskData.title}
          <Form onSubmit={handleSubmit}>
            {successMessage && (
              <Alert
                variant="success"
                onClose={() => setSuccessMessage("")}
                dismissible
              >
                {successMessage}
              </Alert>
            )}
            <Row>
              <Col>
                  {textFields}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox}>
          <HabitsTracker />
        </Col>
        <Col sm={12} md={8} className={styles.NavBox}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default TaskEditForm;