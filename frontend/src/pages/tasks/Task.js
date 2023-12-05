import React from "react";
import styles from "../../styles/TaskList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { useCallback, useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";

const Task = (props) => {
  const {
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
    const foundCategory = categories.find((c) => c.id === category);
    return foundCategory ? foundCategory.title : "Uncategorized";
  };

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
    </Card>
  );
};

export default Task;