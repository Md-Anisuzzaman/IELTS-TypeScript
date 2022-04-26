import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [emailSuccess, setEmailSuccess] = useState();

    return (
        <>
            <section className='contact'>
                <div className='content'>
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat repellendus temporibus aliquid, iste a ab libero, sed ratione eos et voluptatem. Nemo minus quas, non repudiandae aliquid saepe aspernatur.</p>
                </div>
                <div className='container  contactInfo-container '>
                    <div className='contact-body row'>
                        <div className='contactInfo'>
                            <div className='box'>
                                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="text">
                                    <h3>Address</h3>
                                    <p>4671 Sugar Capm Road, <br /> NewYork, London, <br /> 133923</p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="icon"><i className="fas fa-phone"></i></div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>01955568712</p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="icon"><i className="far fa-envelope"></i></div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>Ethian.zaman@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm bg-dark">
                            <form className='responsive-form'>
                                <h2>Send Message</h2>
                                <div className="inputBox">
                                    <span>Full Name</span>
                                    <input className='name-field' type="text" name="name" />
                                </div>
                                <div className="inputBox">
                                    <span>Enter your Email</span>
                                    <input className='email-field' type="email" name="email" />
                                </div>
                                <div className="inputBox">
                                    <span>Subject</span>
                                    <input className='email-field' type="text" name="subject" />
                                </div>
                                <div className="inputBox">
                                    <span>Type Your Message</span>
                                    <textarea name='message' required></textarea>
                                </div>
                                <div className="inputBox">
                                    <input className='btn-submit' type="submit" name="" value='Send' />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>



        </>
    );
};

export default Contact;