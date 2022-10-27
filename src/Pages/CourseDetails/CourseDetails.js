import React from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import { FaFileDownload } from 'react-icons/fa';

const ref = React.createRef();
const CourseDetails = () => {
    const course = useLoaderData()
    const { image_url, name, cur_student, Total_student, employed, fee, title } = course
    return (

        <Row className='ms-4 '>
            <Col lg='9'>
                <Card className='shadow p-3 mb-5 bg-body rounded' >
                    <Card.Img style={{ height: "300px" }} variant="top" src={image_url} />
                    <Card.Body>
                        <div className='d-flex flex-row-reverse justify-content-end '>
                        <Pdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) => <Button variant="outline-dark"><FaFileDownload onClick={toPdf}></FaFileDownload ></Button>}
                        </Pdf>
                        <Card.Title className='pe-2' >Course Name: {name}</Card.Title>
                        </div>
                        <Card.Text>
                            <strong>Description:</strong> {title}
                        </Card.Text>

                    </Card.Body>

                    <Card.Body ref={ref} >
                        <ListGroup className="list-group-flush shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title>Features of this {name} Course</Card.Title>
                                <ListGroup.Item>Life Time Course Access</ListGroup.Item>
                                <ListGroup.Item>24/7 Support </ListGroup.Item>
                                <ListGroup.Item>Job Replacement help</ListGroup.Item>
                                <ListGroup.Item>Project Based teaching</ListGroup.Item>
                                <ListGroup.Item>Access to the updated content</ListGroup.Item>

                            </Card.Body>
                        </ListGroup>
                        <ListGroup className="list-group-flush shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>

                                <Card.Title>Status:</Card.Title>
                                <ListGroup.Item>Current Student: {cur_student}</ListGroup.Item>
                                <ListGroup.Item>Total Student: {Total_student}</ListGroup.Item>
                                <ListGroup.Item>Employment: {employed}</ListGroup.Item>
                            </Card.Body>
                        </ListGroup>
                        <ListGroup className="list-group-flush shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>

                                <Card.Title>Access:</Card.Title>
                                <ListGroup.Item>Previous Fee: {fee}</ListGroup.Item>
                                <ListGroup.Item>Discount offer: 20%</ListGroup.Item>
                                <ListGroup.Item>Current fee: 8000</ListGroup.Item>
                            </Card.Body>
                        </ListGroup>
                    </Card.Body>
                    <div className=" mt-5 mb-5 text-center">

                        <Link to={`/checkout/${course.id}`}><button type="button" className="btn btn-primary text-center">Get Premium Access</button></Link>
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
