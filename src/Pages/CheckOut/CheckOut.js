import React from 'react';
import { useContext } from 'react';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const course = useLoaderData()
    const user = useContext(AuthContext);

    return (
        <div className=' d-flex flex-column  justify-content-center align-items-center h-100 mt-5'>
            <div className='d-flex'>
                {user?.user?.photoURL ?
                    <Image style={{ height: '50px' }} roundedCircle src={user?.user?.photoURL} ></Image>
                    : <FaUser className='fs-1'></FaUser>
                }
                <p className=' px-2'> <strong className='d-block'>{user?.uid
                }{user?.user?.displayName}</strong> Thanks for checking out</p>
            </div>
            <Card.Body className='ms-5 ps-4'>

                <Card.Title>Course Name: {course.name}</Card.Title>
                <ListGroup.Item>Rating: {course.rating.number}</ListGroup.Item>
                <ListGroup.Item>Badge: {course.rating.badge}</ListGroup.Item>
                <ListGroup.Item>Course Fee: {course.fee}</ListGroup.Item>
                <button type="button" className="btn btn-primary mt-2 text-center">Confirm</button>
            </Card.Body>
        </div>
    );
};

export default CheckOut;