import React, { useState, useEffect, useCallback } from "react";

import { Button, Form, Alert, Modal } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function CreateTask() {
  const currentUser = useCurrentUser();

  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    due: "",
    urgent: false,
    important: false,

  });

  const { title, content, due, urgent, important, category } = taskData;

  const [selectedDate, setSelectedDate] = useState(null);

  const [categories, setCategories] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);

  const [errors, setErrors] = useState({});

  const history = useHistory();

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

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosReq.get("/categories/");
      if (response.data?.results) {
        const userCategories = response.data.results.filter((category) => (
          category.owner === currentUser?.username && category.is_owner
        ));
  
        setCategories(
          userCategories.map((category) => ({
            id: category.id,
            title: category.title,
            owner: category.owner,
            is_owner: category.is_owner,
          }))
        );
      } else {
        console.error("Invalid response format for categories:", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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
      await axiosReq.post("/tasks/", formData);
      clearForm();
      setSuccessMessage("Task created!");
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

  return (
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
 
      <Modal.Footer>
        <Button onClick={() => history.goBack()}>cancel</Button>
        <Button type="submit">create</Button>
      </Modal.Footer>
    </Form>
  );
}

export default CreateTask;
