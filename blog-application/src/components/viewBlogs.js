import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { deleteBlog } from "../reducer/blogReducer";
import { useLikeContext } from "../context/LikeContext";

const ViewPost = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === id)
  );
  const navi = useNavigate();
  const dispatch = useDispatch();

  const { blogLikes, handleLike } = useLikeContext();

  const blogLike = blogLikes[blog.id] || { likes: 0, liked: false };

  const likeClick = () => {
    handleLike(blog.id);
  };

  const blogDelete = (blogId) => {
    dispatch(deleteBlog(blogId));
    navi("/");
  };

  const editBlog = (id) => {
    navi(`/edit-blog/${id}`);
  };
  if (!blog) {
    return <div>Post not available</div>;
  }

  return (
    <div className="container mt-5">
      <Card>
        <Card.Header style={{ backgroundColor: "#D3D3D3" }}>
          <Card.Title>{blog.title}</Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "lightyellow" }}>
          <Card.Text>{blog.category}</Card.Text>
          <Card.Text>{blog.description}</Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between align-items-center">
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "10px" }}
        >
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => editBlog(blog.id)}
            variant="primary"
            className="mr-2"
          >
            Edit
          </Button>
          <Button onClick={() => blogDelete(blog.id)} variant="danger">
            Delete
          </Button>
        </div>

        <div>
          <div onClick={likeClick}>
            {blogLike.liked ? (
              <>
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "red" }} />
                {blogLike.likes}
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  style={{ color: "gray" }}
                />
                {blogLike.likes}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
