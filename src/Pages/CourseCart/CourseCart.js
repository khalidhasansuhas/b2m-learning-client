import React from 'react';
import {  CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const CourseCart = ({ course }) => {
    const { name, title, image_url } = course
    return (
        <>
            <CardGroup className='container me-4 ms-4 mb-5 shadow  p-3  bg-body rounded'>
                <Card className='h-full' >
                    <div className='d-flex justify-content-center'>
                        <Card.Img style={{ height: '150px', width: '300px' }} variant="top" src={image_url} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {title}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className='text-center'>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Previous Value: 10000</ListGroup.Item>
                            <ListGroup.Item>Discounted Value: 8000</ListGroup.Item>
                            <ListGroup.Item>Save: 2000</ListGroup.Item>
                        </ListGroup>
                        <Link to={`/coursedetails/${course.id}`}><button type="button" className="btn btn-primary">Details</button></Link>
                    </Card.Body>

                </Card>

            </CardGroup>

        </>

    );
};

export default CourseCart;