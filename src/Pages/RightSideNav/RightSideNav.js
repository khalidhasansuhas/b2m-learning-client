import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideNav = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h2>All courses : {courses.length}</h2>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/coursedetails/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
            <ButtonGroup vertical className='w-100'>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Google SignIn</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> GitHub SignIn</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;