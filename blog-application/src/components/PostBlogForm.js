import React, { useState } from "react";
import { addBlog } from "../reducer/blogReducer";
import { Button, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navi = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog_new = {
      id: uuid(),
      title,
      category,
      description,
    };
    dispatch(addBlog(blog_new));
    setTimeout(() => {
      navi("/");
    }, 2000);
    setTitle("");
    setCategory("");
    setDescription("");
    setSuccessMsg(true);
  };
  return (
    <div className="container" style={{ backgroundColor: "#D3D3D3" }}>
      <div className="container mt-5">
        {successMsg && <Alert variant="success">NEW BLOG ADDED!!!!!</Alert>}
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="blogTitle">
            <Form.Label style={{ fontWeight: "bold" }}>Blog Title</Form.Label>
            <Form.Control
              type="text"
              required="true"
              placeholder="Enter title"
              value={title}
              onChange={handleTitle}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="blogCategory">
            <Form.Label style={{ fontWeight: "bold" }}>Category</Form.Label>
            <Form.Control
              type="text"
              required="true"
              placeholder="Enter category"
              value={category}
              onChange={handleCategory}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="blogDescription">
            <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              required="true"
              placeholder="Enter description"
              value={description}
              onChange={handleDescription}
            />
          </Form.Group>
          <br></br>
          <Button
            color="info"
            type="submit"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostBlog;
