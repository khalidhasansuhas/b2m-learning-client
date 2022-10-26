import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const course = useLoaderData()
    const { image_url, name, cur_student, Total_student, employed, fee, title } = course
    return (

        <Row className='ms-4'>
            <Col lg='9'>
                <Card>
                    <Card.Img style={{height:"300px"}} variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            <strong>Description:</strong> {title}
                        </Card.Text>

                    </Card.Body>

                    <Card.Body >
                        <ListGroup className="list-group-flush">
                            <Card.Body>
                                <Card.Title>Features</Card.Title>
                                <ListGroup.Item>Life Time Course Access</ListGroup.Item>
                                <ListGroup.Item>24/7 Support </ListGroup.Item>
                                <ListGroup.Item>Job Replacement help</ListGroup.Item>
                                <ListGroup.Item>Project Based teaching</ListGroup.Item>
                                <ListGroup.Item>Access to the updated content</ListGroup.Item>

                            </Card.Body>
                        </ListGroup>
                        <ListGroup className="list-group-flush">
                            <Card.Body>

                                <Card.Title>Status:</Card.Title>
                                <ListGroup.Item>Current Student: {cur_student}</ListGroup.Item>
                                <ListGroup.Item>Total Student: {Total_student}</ListGroup.Item>
                                <ListGroup.Item>Employment: {employed}</ListGroup.Item>
                            </Card.Body>
                        </ListGroup>
                    </Card.Body>
                    <div className=" mt-5 mb-5 text-center">

                        <Link to='/getpremium'><button type="button" className="btn btn-primary text-center">Get Premium Access</button></Link>
                    </div>
                </Card>
            </Col>
            <Col lg='3'>
                <RightSideNav></RightSideNav>

                <Link to='/courses'><button type="button" className="btn btn-primary">All Courses</button></Link>
            </Col>
        </Row>
    );
};

export default CourseDetails;