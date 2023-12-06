import React, { useCallback, useState, useEffect } from "react";
import { Button, Card, Media } from "react-bootstrap";
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
    updated_at,
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
        const userCategories = response.data.results.filter((category) => (
          category.owner === currentUser?.username && category.is_owner
        ));
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

  const getCategoryTitle = () => {
    const foundCategory = categories.find((cat) => cat.id === category);
    return foundCategory ? foundCategory.title : "Uncategorized";
  };

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
    } catch (err) {
      console.log(err);
    }
  };

  // Render the card only if is_owner is true
  if (!is_owner) {
    return null;
  }

  if (loadingCategories) {
    return <p>Loading categories...</p>;
  }

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && taskPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Card.Body className={styles.TaskCard}>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {important && <Card.Text>important</Card.Text>}
        {urgent && <Card.Text>urgent</Card.Text>}
        {due && <Card.Text>{due}</Card.Text>}
        {category && <Card.Text>Category: {getCategoryTitle()}</Card.Text>}
      </Card.Body>
      <Button onClick={handleDelete}>Delete</Button>
      <div></div>
      <Button onClick={handleEdit}>Edit</Button>
    </Card>
  );
};

export default Task;