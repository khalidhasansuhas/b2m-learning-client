import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CourseContext } from '../../layout/Main';
import CourseCart from '../CourseCart/CourseCart';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    const courses = useContext(CourseContext)
    
    return (
        <Row>
            <Col lg='9'>
            <h3 className='text-center'> All Courses: {courses.length}</h3>
                 {
                    courses.map(course => <CourseCart 
                        key={course.id}
                         course={course}>

                         </CourseCart>)
                 }
            </Col>
            <Col lg='3'>
                <RightSideNav></RightSideNav>
            </Col>
        </Row>
    );
};

export default Courses;