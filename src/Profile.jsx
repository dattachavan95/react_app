import React from 'react'
import { Link } from "react-router-dom"
import profileImg from './Profileimg.jpg'
import BlogList from './BlogList/BlogList' ;
import FeaturedWorks from './FeaturedWorks';
import Img2 from './Img2.png';
import Img3 from './Img3.png';
import Img1 from './Img1.png';



const Profile = (props) => {
    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/BlogList">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="row p-5 align-items-center">
                <div className="col-12 col-md-6 p-3">
                    <h2 className="w-100">Hi, I am Datta, Creative Technologist</h2>
                    <p className="w-100">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <button className="btn btn-primary mt-2">Download Resume</button>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img className="img-fluid w-50 rounded-circle" src={profileImg} alt="profile img" />
                </div>
            </div>

            {/* Recent Posts */}
            <div className="recentpost p-4 ">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6>Recent post</h6>
                    <a href="#">View all</a>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-title fw-bold">Making a design system from scratch</p>
                                <h6 className="card-subtitle mb-2 text-muted">12 Feb 2020 | Design, Pattern</h6>
                                <p className="card-text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-title fw-bold">Creating pixel perfect icons in Figma</p>
                                <h6 className="card-subtitle mb-2 text-muted">12 Feb 2020 | Design</h6>
                                <p className="card-text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h4 className="fw-bold mb-4">Featured works</h4>
                <FeaturedWorks year='2020'
                    title='Designing Dashboards'
                    category='Dashboard'
                    description=
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    image={Img1}
                />
                <FeaturedWorks year='2020'
                    title=' Vibrant Portraits of 2020'
                    category='Illustration'
                    description=
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    image={Img2}
                />
                <FeaturedWorks year='2018'
                    title='36 Days of Malayalam type'
                    category='Typography'
                    description=
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    image={Img3}
                />
            </div>
        </div>



    );

};

export default Profile;
