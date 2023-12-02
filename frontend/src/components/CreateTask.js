import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';



function CreateTask() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    duedate: "",
    urgent: "",
    important: "",
    category: "",
  });
  const { title, content } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };



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

      <Form.Check 
        type='checkbox'
        id='default-checkbox'
        label='default-checkbox'
        name="important"
      />

    <Form.Check 
        type='checkbox'
        id='default-checkbox'
        label='default-checkbox'
        name="urgent"
      />

<DatePicker onChange={handleChange} />

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

      <Button
        
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button  type="submit">
        create
      </Button>
    </div>
  );

  return (
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

    <Form.Check 
      type='checkbox'
      id='default-checkbox'
      label='default-checkbox'
      name="important"
    />

  <Form.Check 
      type='checkbox'
      id='default-checkbox'
      label='default-checkbox'
      name="urgent"
    />

<DatePicker onChange={handleChange}  />

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

    <Button
      
      onClick={() => {}}
    >
      cancel
    </Button>
    <Button  type="submit">
      create
    </Button>
  </div>
  );
}

export default CreateTask;