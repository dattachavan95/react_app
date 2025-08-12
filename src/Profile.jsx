import React from 'react'
import { Link } from "react-router-dom"
import profileImg from './Profileimg.jpg'
import BlogList from './BlogList';
import FeaturedWorks from './FeaturedWorks';
import Img2 from './Img2.png';
import Img3 from './Img3.png';
import Img1 from './Img1.png';
import Navbar from './Navbar';




const Profile = (props) => {
    return (
        <div className="container">
            {/* Navbar */}
            <Navbar>
                
            </Navbar>
           

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
                
                <FeaturedWorks />
            </div>
        </div>



    );

};

export default Profile;
