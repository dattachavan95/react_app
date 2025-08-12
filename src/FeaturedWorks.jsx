import React from "react";
import Img1 from "./Img1.png";
import Img2 from "./Img2.png";
import Img3 from "./Img3.png";

function FeaturedWorks() {
  // ✅ Data inside the same file
  const worksData = [
    {
      year: "2020",
      title: "Designing Dashboards",
      category: "Dashboard",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: Img1,
    },
    {
      year: "2020",
      title: "Vibrant Portraits of 2020",
      category: "Illustration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: Img2,
    },
    {
      year: "2018",
      title: "36 Days of Malayalam type",
      category: "Typography",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: Img3,
    },
  ];

  return (
      
    <div className="container w-75">
      <h4 className="fw-bold mb-4 ">Featured works</h4>
      {worksData.map((work, index) => (
        <div key={index} className="row mb-5 align-items-center">
          <div className="col-md-4">
            <img
              src={work.image}
              alt={work.title}
              className="img-fluid w-75 rounded featured-img"
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
      ))}
    </div>
   
  );
}

export default FeaturedWorks;
