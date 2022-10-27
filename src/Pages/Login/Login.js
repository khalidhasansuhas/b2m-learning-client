import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {  Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Registerimg from '../../assets/Registerimg.png';
import B2m from '../../assets/B2m.png';

const Login = () => {
    const { providerLogin, setUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const[error, setError] = useState('')
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(e=>
            {
                console.error(e)
                setError(e.message)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, {replace: true});
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <>

            <Row className=' ms-4 px-5 py-5 shadow p-3 mb-5 bg-body rounded' >
                <Col lg='6'>
                    <div >
                        <div class="text-center mb-3">
                            <Image style={{height:'60px'}} src={B2m}></Image>
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
                                <Form.Control name='email' type="email" id="registerName" required placeholder='Your Email' />
                                <Form.Label class="form-label" for="registerName"> Your Email</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='password' type="password" id="registerName" required placeholder='Your Password' />
                                <Form.Label class="form-label" for="registerName"> Your Password</Form.Label>
                            </Form.Group>
                            <p className='text-danger'>{error}</p>

                            <div className='d-flex justify-content-center mb-3'>
                                <Button type="submit" class="btn  btn-primary btn-block mb-4">Log in</Button>
                            </div>


                            <div class="text-center">
                                <p>Not a member? <Link to='/register'>Register</Link></p>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg='6'   >
                    <div className='h-100 w-100 d-flex'>
                    <Image  src={Registerimg}></Image>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Login;