import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Announcement from '../../../assets/Announcement.jpg';


const LeftSideNav = () => {
    return (
        <div >
            <Card className='shadow p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Announcement} />
                <Card.Body>
                    <Card.Title>Discount Offer!!!</Card.Title>
                    <Card.Text>
                        20% off for upcoming enrollment for any courses for everyone who purchase our course before 11/11/22.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Previous Value: 10000</ListGroup.Item>
                    <ListGroup.Item>Discounted Value: 8000</ListGroup.Item>
                    <ListGroup.Item>Save: 2000</ListGroup.Item>
                </ListGroup>
                <Card.Body className='text-center'>
                    <Link to='courses'><button type="button" class="btn btn-primary">Explore</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeftSideNav;