import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

interface dataType {
    _id: number,
    name: string,
    class: number,
    duration: string | number,
    details: string,
    img?: string,
}


const Details = () => {
    const [courses, setCourses] = useState<any>({})
    const { courseId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/singleCourse/${courseId}`)
            .then(res => res.json())
            .then(data => setCourses(data));
        console.log(courses);

    }, []);
    return (
        <div className="details-container mt-5 mb-5 p-5">
            <div className="row container">
                <div className="col-md-12">
                    <img className="w-50" src={courses.img} alt="" />
                    <h4>{courses.name}</h4>
                    <p>Duation: {courses.duration}</p>
                    <h5>Details: ${courses.details}</h5>
                </div>
            </div>
        </div>
    )
}

export default Details