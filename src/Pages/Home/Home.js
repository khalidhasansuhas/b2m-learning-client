import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CourseContext } from '../../layout/Main';
import RightSideNav from '../RightSideNav/RightSideNav';


const Home = () => {
    const loadCourse = useContext(CourseContext)
    
    return (


        <div>

            <Row>
                <Col lg='9'>
                    <div>
                        <h2>{loadCourse.name}</h2>
                    </div>
                </Col>
                <Col lg='3'>
                    <RightSideNav></RightSideNav>

                    <Link to='/courses'><button type="button" className="btn btn-primary">All Courses</button></Link>
                </Col>
            </Row>
        </div>

    );
};

export default Home;