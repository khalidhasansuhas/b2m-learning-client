import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Announcement from '../../../assets/Announcement.jpg';
import BarCharts from '../../../components/BarChart/BarChart';



const LeftSideNav = () => {
    return (
       <>
        <div >
            <Card className='shadow p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Announcement} />
                <Card.Body>
                    <Card.Title>Discount Offer!!!</Card.Title>
                    <Card.Text>
                        20% off for upcoming enrollment for any courses for everyone who purchase our course before 11/11/22.
                    </Card.Text>
                </Card.Body>
                
                <Card.Body className='text-center'>
                    <Link to='courses'><button type="button" className="btn btn-primary">Explore</button></Link>
                </Card.Body>
            </Card>
        </div>
        <div className='shadow  p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
        <BarCharts></BarCharts>
        </div>
       </>
    );
};

export default LeftSideNav;