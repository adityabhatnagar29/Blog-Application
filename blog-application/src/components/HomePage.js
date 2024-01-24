import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="container mt-5" style={{backgroundColor:'#D3D3D3'}}>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <Link
              to={`/blog-details/${blog.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="mb-4 hover-card" style={{marginTop:'15px'}}>
                <Card.Body>
                  <Card.Title tag="h4" className="card-title">
                    {blog.title}
                  </Card.Title>
                  <Card.Text className="card-category">
                    <strong>Category:</strong> {blog.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
