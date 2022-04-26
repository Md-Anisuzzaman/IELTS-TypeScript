import React, { useEffect, useRef } from 'react';
import './About.css'

const About = () => {

    const aboutRef = useRef(null)

    return (
        <>
            <section ref={aboutRef} className='about'>
                <div className='main container'>
                    {/* <img src="https://onlineedubd.com/wp-content/uploads/2021/01/study-in-UK-without-IELTS.jpg" alt="" /> */}
                    <div className="row">
                        <div className='about-text'>
                            <h1 className='text-light text-center mb-5'>About us</h1>
                            <p>IELTS usually all of the sentences in the same paragraph should stay with the same idea. If this is a challenge, if you have problems organising your thoughts you may want to look at the website our expert trained in IELTS
                                <br />
                                <br />
                                At the exam, you can make a list of ideas, have a look at it and give each point a number in order of importance. Above all, your points should follow a logical order.</p>
                            <button className="about-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
