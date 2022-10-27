import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import B2m from '../../../assets/B2m.png';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg={toggle ? "dark" : "light"} variant={toggle ? "dark" : "light"}>

            <Container>
                <Link to='/login'><Image style={{ height: '50px' }} src={B2m}></Image></Link>
                <Link type="button" className={toggle ? "btn btn-dark text-warning" : "btn btn-light text-warning"} to='/'>Beginner to Master Learning</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} to='/'>Home</Link>
                        <Link type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} to='/courses'>Courses</Link>
                        <Link type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} to='/faq'>FAQ</Link>
                        <Link type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} to='/blog'>Blog</Link>

                    </Nav>
                    <Nav>


                        <button onClick={() => setToggle(!toggle)} className={toggle ? "btn btn-dark" : "btn btn-light"}>
                            {toggle ? 'Light' : "Dark"}
                        </button>
                        <Nav href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <Button type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} onClick={handleLogOut}>Log Out</Button>
                                       
                                    </>
                                    :
                                    <>
                                        <Link type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} to='/login'>Login</Link>
                                        <Link type="button" className={toggle ? "btn btn-dark" : "btn btn-light"} to='/register'>Register</Link>
                                    </>
                            }

                        </Nav>
                        <Link to='/profile'>
                            {user?.photoURL ?
                                <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip>
                                        {user?.displayName}
                                    </Tooltip>
                                }>
                                    
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image>
                                </OverlayTrigger>

                                : <FaUser></FaUser>
                            }

                        </Link>

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