import React, { useState } from "react";

import { Button, Form, Alert } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import "react-datepicker/dist/react-datepicker.css";

function CreateHabit() {

  const currentUser = useCurrentUser();

  const [habitData, setHabitData] = useState({
    title: "",
  });

  const { title } = habitData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const [successMessage, setSuccessMessage] = useState("");

  const clearForm = () => {
    setHabitData({
      title: "",
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setHabitData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setHabitData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(currentUser?.username);

    formData.append("title", title);

    try {
      await axiosReq.post("/habits/", formData);
      clearForm();
      setSuccessMessage("Habit created!");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


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

        <Button onClick={() => history.goBack()}>cancel</Button>
        <Button type="submit">create</Button>
    </Form>
  );
}

export default CreateHabit;
