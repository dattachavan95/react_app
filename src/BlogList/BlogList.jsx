import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogList.css";

const blogPosts = [
  {
    id: 1,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
  },
  {
    id: 2,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
  },
  {
    id: 3,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
  },
  {
    id: 4,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
  }
];

const BlogList = (props) => {
  return (
    <div className="container mt-5 blog-list">
      <h2 className="fw-bold mb-4 blog-title">
        <span className="text-primary">Blog</span>
      </h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-item py-4 border-bottom">
          <Link to={`/blog/${post.id}`} className="text-decoration-none">
            <h4 className="fw-semibold text-dark">{post.title}</h4>
          </Link>
          <div className="d-flex align-items-center text-muted mb-2">
            <small>{post.date}</small>
            <span className="mx-2">|</span>
            <small className="tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-info me-1">
                  {tag}
                  {i < post.tags.length - 1 ? "," : ""}
                </span>
              ))}
            </small>
          </div>
          <p className="text-muted">{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
