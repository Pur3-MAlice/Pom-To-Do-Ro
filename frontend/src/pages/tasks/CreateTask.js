import React, { useState, useEffect } from "react";

import { Button, Form, Alert, Modal } from "react-bootstrap";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function CreateTask() {
  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    duedate: "",
    urgent: "",
    important: "",
    category: "",
  });

  const { title, content, duedate, urgent, important, category } = taskData;

  const [categories, setCategories] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);

  const [errors, setErrors] = useState({});

  const [date, setDate] = useState(new Date());

  const history = useHistory();

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosReq.get("/categories/");
      if (response.data?.results) {
        console.log("categories got");
        setCategories(response.data.results.map(category => ({
          id: category.id,
          title: category.title, 
          owner: category.owner,
        })));
        console.log(categories);
        
      } else {
        console.error("Invalid response format for categories:", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false); 
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("duedate", duedate);
    formData.append("urgent", urgent);
    formData.append("important", important);
    formData.append("category", category);

    try {
      const { data } = await axiosReq.post("/tasks/", formData);
      history.push(`/tasks/${data.id}`);
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
        value={important}
        onChange={handleChange}
      />

      <Form.Check
        type="checkbox"
        id="urgent"
        label="Urgent"
        name="urgent"
        value={urgent}
        onChange={handleChange}
      />

      <Form.Control
        type="date"
        name="datepick"
        placeholder="DateRange"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {errors?.datepick?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
        name="category"
        value={taskData.category}
        onChange={handleChange}
      >
        <option value="">Category...</option>
        {categories.map((category) => (
          <option value={category.title}>
            {category.title}
          </option>
        ))}
      </Form.Control>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* <Form.File id="formcheck-api-regular">
        <Form.File.Label>Regular file input</Form.File.Label>
        <Form.File.Input />
      </Form.File> */}
      <Modal.Footer>
        <Button onClick={() => history.goBack()}>cancel</Button>
        <Button type="submit">create</Button>
      </Modal.Footer>
    </Form>
  );
}

export default CreateTask;
