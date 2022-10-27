import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaArchive, FaEnvelope, FaEthernet, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaPrint, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center text-lg-start text-muted container'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <Link to='/home' className='me-4 text-reset'>
              <FaFacebook/>
            </Link>
            <Link to='/home' className='me-4 text-reset'>
              <FaTwitter />
            </Link>
            <Link to='/home' className='me-4 text-reset'>
              <FaGoogle />
            </Link>
            <Link to='/home' className='me-4 text-reset'>
              <FaInstagram/>
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
                  <FaArchive />
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
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
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </Col>
  
              <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <FaEthernet className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <FaEnvelope className="me-3" />
                  info@example.com
                </p>
                <p>
                  <FaPhone className="me-3"/> + 01 234 567 88
                </p>
                <p>
                  <FaPrint className="me-3"/> + 01 234 567 89
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