import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Work1 from './Work1.png';
import Work2 from './Work2.png';
import Work3 from './Work3.png';


function WorkDetails() {
  return (
    <div className="container w-50 py-4">
      <h2 className="fw-bold">Designing Dashboards with usability in mind</h2>
      <div className="mb-2">
        <span className="badge bg-danger me-2">2020</span>
        <small className="text-muted">Dashboard, User Experience Design</small>
      </div>
      <p className="text-secondary">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p>
      <img
        src={Work1}
        alt="Dashboard Design"
        className="img-fluid rounded mb-4"
      />

      <h3>Heading 1</h3>
      <h5 className="text-muted">Heading 2</h5>
      <p className="text-secondary">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p>
      <img
        src={Work2}
        alt="Red Car"
        className="img-fluid rounded mb-4"
      />

      <img
        src={Work3}
        alt="Order Summary"
        className="img-fluid rounded"
      />
    </div>
  );
}
export default WorkDetails ;