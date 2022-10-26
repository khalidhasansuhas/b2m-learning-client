import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';

const CourseDetails = () => {
    const course = useLoaderData()
    return (
        
        <Row>
        <Col lg='9'>
        <div>
            <h2>{course.name}</h2>
        </div>
        </Col>
        <Col lg='3'>
            <RightSideNav></RightSideNav>
            
        <Link to='/courses'><button type="button" className="btn btn-primary">All Courses</button></Link>
        </Col>
    </Row>
    );
};

export default CourseDetails;