import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import Carousel from 'react-bootstrap/Carousel';
import Course1 from '../../assets/Course1.png';
import Course2 from '../../assets/Course2.png';
import Course3 from '../../assets/Course3.png';
import Course4 from '../../assets/Course4.png';
import Course5 from '../../assets/Course5.png';
import Course6 from '../../assets/Course6.png';
import JahnkarVai from '../../assets/JahnkarVai.png';
import B2m from '../../assets/B2m.png';


const Home = () => {
  

    return (


        <div>

            <Row>
                <Col lg='9'>
                    <div >
                    <h3 className='text-center'>Courses</h3>
                        <Carousel variant="dark" className=' ms-4 px-5 py-5 shadow p-3 mb-5 bg-body rounded'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Course1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Course2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Course3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Course4}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Course5}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Course6}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className=" ms-4 px-5 py-5 shadow p-3 mb-5 bg-body rounded">
                        <div className="row g-2">
                            <h3 className='text-center pb-3'>Course Features</h3>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Life Time Access</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">24/7 Support</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Job Placement Help</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Project Oriented </div>
                            </div>
                        </div>
                    </div>
                    <Row className=' ms-4 px-5 py-5 shadow p-3 mb-5 bg-body rounded' >
                        <h3 className='text-center pb-3'>Few Words:</h3>
                        <Col lg='6'>
                            <div >
                                <div className="text-center mb-3">
                                    <Image style={{ height: '60px' }} src={B2m}></Image>
                                    <p>We don't guarantee you that you will certainly have job after finishing our courses. But one thing we can guaranttee that "You will not be the same as you were before". Bakita Allahr Icchhaa </p>
                                </div>


                            </div>
                        </Col>
                        <Col lg='6'   >
                            <div className='h-100 w-100 d-flex'>
                                <Image fluid style={{ height: '300px' }} src={JahnkarVai}></Image>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg='3'>
                    <RightSideNav></RightSideNav>

                    
                    <Link to='/courses'><button type="button" className="btn  w-100 text-center btn-outline-primary">All Courses</button></Link>
                   
                </Col>
            </Row>
        </div>

    );
};

export default Home;