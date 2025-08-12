import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogList.css";
import Navbar from "./Navbar";
const blogPosts = [
  {
    id: 1,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 2,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 3,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    id: 4,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    tags: ["Express", "Handlebars"],
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  }
];

const BlogList = () => {
  return (
   <div className="container"> 
    <Navbar></Navbar>  
    <div className="container w-50  mt-5 blog-list">
      <h2 className="fw-bold mb-4 blog-title">
        <span className="">Blog</span>
      </h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-item p-4 border-bottom">
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
    </div>  
  );
};

export default BlogList;
