import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {  OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

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
        <div className='border border-success mx-4 px-5 py-5'>
            <div class="text-center mb-3">
                <strong><p>Log in with:</p></strong>
                <OverlayTrigger
                    overlay={
                        <Tooltip >
                            Sign in With Google
                        </Tooltip>}
                >
                    <Button onClick={handleGoogleSignIn}  type="button" className='mx-2' variant="outline-primary">
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


            <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">

                    <div class="form-check mb-3 mb-md-0">
                        <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                    </div>
                </div>


                <div class="col-md-6 d-flex justify-content-center">

                    <a href="#!">Forgot password?</a>
                </div>
            </div>


            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>


            <div class="text-center">
                <p>Not a member? <Link to='/register'>Register</Link></p>
            </div>
        </Form>
    </div>
    );
};

export default Login;