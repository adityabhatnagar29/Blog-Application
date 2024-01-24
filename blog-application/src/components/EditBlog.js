import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { updateBlog } from "../reducer/blogReducer";

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navi = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const edit_blog = blogs.find((blog) => blog.id === id);

  useEffect(() => {
    if (edit_blog) {
      setTitle(edit_blog.title);
      setCategory(edit_blog.category);
      setDescription(edit_blog.description);
    }
  }, [edit_blog]);

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

    const updated_Blog = {
      id,
      title,
      category,
      description,
    };

    dispatch(updateBlog(updated_Blog));
    navi("/");
    setTitle("");
    setCategory("");
    setDescription("");
  };

  const handleCancel = (id) => {
    navi(`/blog-details/${id}`);
  };

  if (!edit_blog) {
    return <div>Blog do not exist!!!!!</div>;
  }

  return (
    <div className="container mt-5 " style={{ backgroundColor: "#D3D3D3" }}>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="blogTitle">
          <Form.Label style={{ fontWeight: "bold" }}>Blog Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            required="true"
            onChange={handleTitle}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="blogCategory">
          <Form.Label style={{ fontWeight: "bold" }}>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            required="true"
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
            placeholder="Enter description"
            required="true"
            value={description}
            onChange={handleDescription}
          />
        </Form.Group>
        <br></br>
        <Button
          style={{ marginTop: "10px", marginRight: "5px" }}
          variant="dark"
          type="submit"
        >
          Save
        </Button>
        <Button
          onClick={() => handleCancel(edit_blog.id)}
          style={{ marginTop: "10px" }}
          variant="dark"
          type="submit"
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
