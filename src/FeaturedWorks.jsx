import React from 'react';
import './FeaturedWorks.css';
import Img3 from './Img3.png';

const FeaturedWorks = (work) => {
  return (


    <div className="row mb-5 align-items-center">
      <div className="col-md-4">
        <img
          src={work.image}
          alt={work.title}
          className="img-fluid rounded featured-img"
        />
      </div>
      <div className="col-md-8">
        <h5 className="fw-bold">{work.title}</h5>
        <div className="d-flex align-items-center mb-2">
          <span className="badge bg-dark me-2">{work.year}</span>
          <span className="text-muted">{work.category}</span>
        </div>
        <p className="text-muted">{work.description}</p>
      </div>
    </div>


  );
}
export default FeaturedWorks;