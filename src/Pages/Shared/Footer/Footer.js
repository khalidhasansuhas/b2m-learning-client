import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaEnvelope, FaEthernet, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaPrint, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='text-center text-lg-start text-muted container mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to='/home' className='me-4 text-reset'>
            <FaFacebook />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaTwitter />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaGoogle />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaInstagram />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaLinkedin />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaGithub />
          </Link>
        </div>
      </section>

      <section className=''>
        <div className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                BEGINNER TO MASTER LEARNING
              </h6>
              <p>
                B2M Learning is teaching more than 50000 students all around the world. Feel free to contact us for more details.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Python
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Java
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  JavaScript
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  C++
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Go
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Php
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/courses' className='text-reset'>
                  Courses
                </Link>
              </p>
              <p>
                <Link to='/faq' className='text-reset'>
                  Blog
                </Link>
              </p>
              <p>
                <Link href='/blog' className='text-reset'>
                  FAQ
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset'>
                  Home
                </Link>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FaEthernet className="me-2" />
                Mohakhali,Dhaka 1216, Bangladesh
              </p>
              <p>
                <FaEnvelope className="me-3" />
                khalidhasansuhas@gmail.com
              </p>
              <p>
                <FaPhone className="me-3" /> + 01 739 479 950
              </p>
              <p>
                <FaPrint className="me-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <p>Khalid Hasan Suhas</p>
      </div>
    </div>
  );
};

export default Footer;