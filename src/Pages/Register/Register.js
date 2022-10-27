import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Registerimg from '../../assets/Registerimg.png';

const Register = () => {


    const [error, setError] = useState('')
    const { createUser, updateUserProfile, providerLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                navigate('/')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <>

            <Row>
                <Col lg='6'>
                    <div className='border border-success mx-4 px-5 py-5'>
                        <div class="text-center mb-3">
                            <strong><p>Log in with:</p></strong>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip >
                                        Sign in With Google
                                    </Tooltip>}
                            >
                                <Button onClick={handleGoogleSignIn} type="button" className='mx-2' variant="outline-primary">
                                    <FaGoogle></FaGoogle>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip >
                                        Sign in With GitHub
                                    </Tooltip>}
                            >
                                <Button onClick={handleGithubSignIn} type="button" className='mx-2' variant="outline-dark">
                                    <FaGithub></FaGithub>
                                </Button>
                            </OverlayTrigger>

                        </div>
                        <p class="text-center">or:</p>

                        <Form onSubmit={handleSubmit}>


                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='name' type="text" id="registerName" placeholder='Full Name' />
                                <Form.Label class="form-label" for="registerName"> Your Name</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='photoURL' type="text" id="registerName" placeholder='Photo URL' />
                                <Form.Label class="form-label" for="registerName"> Your PhotoURL</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='email' type="email" id="registerName" required placeholder='Your Email' />
                                <Form.Label class="form-label" for="registerName"> Your Email</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='password' type="password" id="registerName" required placeholder='Your Password' />
                                <Form.Label class="form-label" for="registerName"> Your Password</Form.Label>
                            </Form.Group>
                            <p className='text-danger'>{error}</p>

                            <div className='d-flex justify-content-center mb-3'>
                                <Button type="submit" class="btn  btn-primary btn-block mb-4">Register</Button>
                            </div>


                            <div class="text-center">
                                <p>Already a member? <Link to='/login'>Sign in</Link></p>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg='6' >
                    <div className=' y-auto'>
                    <Image className='' fluid src={Registerimg}></Image>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Register;