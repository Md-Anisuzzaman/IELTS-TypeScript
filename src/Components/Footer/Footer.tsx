import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-body">
      <div className='row row-div'>
        <div className='container-1 col-lg-3'>
          <p> IeltsBD is your complete IELTS academic preparation course. This course covers all 
            sections of the IELTS Academic test: Writing (Task 1 and Task 2), Speaking, Listening and Reading.
          </p>
          <h6>Follow Us On</h6>
          <h3><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i> <i className="fab fa-twitter-square"></i></h3>
        </div>

        <div className="container-2 col-lg-3">
          <h5>Quick Link</h5>
          <li>About Us</li>
          <li>Course Information</li>
          <li>Booking Process</li>
          <li>Blog</li>
        </div>

        <div className="container-3 col-lg-3">
          <h5>Course Type</h5>
          <li>Reading</li>
          <li>Writting</li>
          <li>Listening</li>
          <li>Speaking</li>
        </div>

        <div className="container-4 col-lg-3">
          <h5>Gallery</h5>
          <img src="https://www.jeduka.com/storage/newsletter/1598527722_IELTS_Exam.png" alt="" />
          <img src="https://crispy-pics.s3.amazonaws.com/uploads/ckeditor/pictures/307/content_Mechanics_of_the_IELTS_Exam.png" alt="" />
          <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/21215950/IELTS-Preparation-Tips.png" alt="" />
          <img src="https://images4.content-hci.com/commimg/myhotcourses/blog/post/myhc_102562.jpg" alt="" />

        </div>
        <hr />
        <div className='foo-style'>
          <h5>Contact Us</h5>
          <p>+88015485487</p>
          <p>IeltsBD@hotmail.com</p>
          <p>32, Dhanmondi, Dhaka, Bangladesh.</p>
        </div>

      </div>

    </div>
  );

};

export default Footer;