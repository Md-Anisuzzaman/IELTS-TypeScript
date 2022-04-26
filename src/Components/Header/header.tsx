import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo-ielts.png'


const Header = () => {

    return (
        <div className="header-height">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between">
                        <div className='logo-container'>
                            <img className='logo-style mt-2' src={logo} alt="" />
                        </div>
                        <div className='responsive-container'>
                        
                            <ul className=" ul-responsive d-flex flex-wrap mt-4 ul-design align-items-end justify-content-end">
                                <li>
                                    <Link to="/home" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className="nav-link">
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addCourses" className="nav-link">
                                        AddCourses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start">
                <div className='div-container mt-5'>
                    <h1 className='brand-color'>IELTS Bangladesh</h1>
                    <p className="text-rong mt-3">Prepare yourself and grab the opportunity to represent internationally
                        <br />Our highly qualified teachers deliver an interactive learning experience in our classrooms </p>
                    <br />
                    <h5 style={{ color: '#FFD700' }}>Now, it's your chance <i className=" icon-size far fa-thumbs-up"></i></h5>
                </div>
            </div>
        </div>
    );
};

export default Header;