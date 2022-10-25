import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <Row>
            <Col lg='9'>
                 <h1>This is course content</h1>
            </Col>
            <Col lg='3'>
                <RightSideNav></RightSideNav>
            </Col>
        </Row>
    );
};

export default Courses;