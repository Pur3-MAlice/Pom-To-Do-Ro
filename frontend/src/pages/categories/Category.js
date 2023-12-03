import React from "react";
// import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";

const Category = (props) => {
  const { id, owner, profile_id } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/categories/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/categories/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Link to={`/profiles/${profile_id}`}></Link>
        {is_owner && (
          <>
            <Button onClick={handleEdit}>edit</Button>
            <Button onClick={handleDelete}>delete</Button>
          </>
        )}

      <Link to={`/categories/${id}`}></Link>
    </>
  );
};

export default Category;