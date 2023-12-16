import React, { useState, useEffect } from "react";
import { Button, Form, Alert, Row } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from "../../styles/CreateEditTask.module.css";
import fetchCategories from "./FetchCategories";

function CreateTask({ onToggle }) {
  const currentUser = useCurrentUser();

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

  const [categories, setCategories] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  const clearForm = () => {
    setTaskData({
      title: "",
      content: "",
      due: "",
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setTaskData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setTaskData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDate = (date) => {
    setSelectedDate(date);
    setTaskData({
      ...taskData,
      due: date.toISOString(),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await fetchCategories(currentUser);
      setCategories(fetchedCategories);
      setLoadingCategories(false);
    };

    fetchData();
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("due", due);
    formData.append("urgent", urgent);
    formData.append("important", important);
    formData.append("category", category);

    try {
      await axiosReq.post("/tasks/", formData);
      clearForm();
      setSuccessMessage("Task created!");
      onToggle();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  if (loadingCategories) {
    return <p>Loading Task Form...</p>;
  }

  return (
    <Row noGutters className="justify-content-center">
      <Form onSubmit={handleSubmit} className={styles.Form}>
        {successMessage && (
          <Alert
            variant="success"
            onClose={() => setSuccessMessage("")}
            dismissible
          >
            {successMessage}
          </Alert>
        )}
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

        <Form.Group className="d-flex align-items-center justify-content-center">
          <div className="mr-3">
            <Form.Check
              type="checkbox"
              id="important"
              label="Important"
              name="important"
              checked={important}
              onChange={handleChange}
              className={styles.TaskCheck}
            />
          </div>

          <div>
            <Form.Check
              type="checkbox"
              id="urgent"
              label="Urgent"
              name="urgent"
              checked={urgent}
              onChange={handleChange}
              className={styles.TaskCheck}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className={styles.DueDate}>Due Date:</Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            className="form-control"
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
        <Button className={styles.CancelButton} onClick={() => onToggle()}>cancel</Button>
        <Button className={styles.CreateButton} type="submit">create</Button>
      </Form>
    </Row>
  );
}

export default CreateTask;
