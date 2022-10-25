import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res =>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div>
            <h2>All courses : {courses.length}</h2>
            <div>
                {
                    courses.map(course=> <p key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;