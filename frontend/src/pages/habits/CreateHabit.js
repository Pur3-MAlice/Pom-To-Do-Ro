import React, { useState } from "react";
import { Button, Form, Alert, Modal } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

function CreateHabit({ onHabitCreated, onClose, updateHabits, ...props}) {
  const [habitData, setHabitData] = useState({
    title: "",
  });

  const { title } = habitData;
  const [errors, setErrors] = useState({});
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

    formData.append("title", title);

    try {
      const response = await axiosReq.post("/habits/", formData);
      clearForm();
      setSuccessMessage("Habit created!");
      onClose();

      onHabitCreated(response.data);
      
      updateHabits((prevHabits) => ({
        ...prevHabits,
        results: [...prevHabits.results, response.data],
      }));

      console.log("After updateHabits call");
      
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
      <Modal.Footer>
        <Button onClick={() => onClose()}>cancel</Button>
        <Button type="submit">create</Button>
      </Modal.Footer>
    </Form>
  );
}

export default CreateHabit;