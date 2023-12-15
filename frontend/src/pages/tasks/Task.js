import React, { useCallback, useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

import styles from "../../styles/TaskList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";

const Task = (props) => {
  const {
    id,
    owner,
    title,
    content,
    important,
    urgent,
    due,
    category,
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axiosReq.get("/categories/");
      if (response.data?.results) {
        const userCategories = response.data.results.filter(
          (category) =>
            category.owner === currentUser?.username && category.is_owner
        );
        setCategories(
          userCategories.map((category) => ({
            id: category.id,
            title: category.title,
            owner: category.owner,
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

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      props.onTaskDeleted(id);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategoryTitle = () => {
    const foundCategory = categories.find((cat) => cat.id === category);
    return foundCategory ? foundCategory.title : "Uncategorized";
  };

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  if (!is_owner) {
    return null;
  }

  if (loadingCategories) {
    return <p>Loading tasks...</p>;
  }

  return (
    <Card className={styles.Task}>
      {is_owner && taskPage && "..."}
      <Card.Body className={styles.TaskCard}>
        {title && <Card.Title  style={{ textDecoration: 'underline' }}>{title}</Card.Title>}
        {category && <Card.Text>{getCategoryTitle()}</Card.Text>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.ImpUrgContainer}>
          {important && <Card.Text className={styles.Imp}>Important</Card.Text>}
          {urgent && <Card.Text className={styles.Urg}>Urgent</Card.Text>}
        </div>
        <div className={styles.DueContainer}>
          {due && <Card.Text>{due}</Card.Text>}
        </div>
      </Card.Body>
      <div className={styles.TaskFooter}>
        <Button className={styles.EditButton} onClick={handleEdit}>
          Edit
        </Button>
        <Button className={styles.DeleteButton} onClick={handleDelete}>
          Completed
        </Button>
      </div>
    </Card>
  );
};

export default Task;