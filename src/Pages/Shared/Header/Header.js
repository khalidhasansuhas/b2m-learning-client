import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import B2m from '../../../assets/B2m.png';
import { Image } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(true)


    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg={toggle? "dark" : "light"} variant={toggle? "dark" : "light"}>

            <Container>
                <Link to='/'><Image style={{ height: '50px' }} src={B2m}></Image></Link>
                <Link type="button" className={toggle? "btn btn-dark text-warning" : "btn btn-light text-warning" } to='/'>Beginner to Master Learning</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> 
                        <Link type="button" className={toggle? "btn btn-dark" : "btn btn-light" } to='/'>Home</Link>
                        <Link type="button" className={toggle? "btn btn-dark" : "btn btn-light" } to='/courses'>Courses</Link>
                        <Link type="button" className={toggle? "btn btn-dark" : "btn btn-light" } to='/faq'>FAQ</Link>
                        <Link type="button" className={toggle? "btn btn-dark" : "btn btn-light" } to='/blog'>Blog</Link>

                    </Nav>
                    <Nav>
                        <Link type="button" className={toggle? "btn btn-dark" : "btn btn-light" } to='/login'>Login</Link>
                        <Link type="button" className={toggle? "btn btn-dark" : "btn btn-light" } to='/register'>Register</Link>
                        
                        <button onClick={() => setToggle(!toggle)} className={toggle? "btn btn-dark" : "btn btn-light" }>
                        {toggle ? 'Dark Mode' : "Light Mode"}
                        </button>


                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;