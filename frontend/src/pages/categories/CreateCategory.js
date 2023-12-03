import React, { useState } from "react";
import { Button, Form, Alert, Row, Col, Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const CreateCategory = () => {
  const [categoryData, setCategoryData] = useState({
    title: "",
    content: ""
  });

  const { title, content } = categoryData;

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  const clearForm = () => {
    setCategoryData({
      title: "",
      content: ""
    });
  };

  const handleChange = (event) => {
    setCategoryData({
      ...categoryData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);

    try {
      await axiosReq.post("/categories/", formData);
      clearForm();
      setSuccessMessage("Category created successfully!");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleCancel = () => {
    clearForm();
  };

  const textFields = ( 
    <>
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
          rows={3}
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
        <Button onClick={handleCancel}>cancel</Button>
        <Button type="submit">create</Button>
  </>
);


  return (
    <Form onSubmit={handleSubmit}>
      {successMessage && (
        <Alert variant="success" onClose={() => setSuccessMessage("")} dismissible>
          {successMessage}
        </Alert>
      )}
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};
export default CreateCategory;
