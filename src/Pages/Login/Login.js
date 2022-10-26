import React from 'react';
import { useContext } from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

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
            navigate('/home')
        })
        .catch(e=>console.error(e))
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
                    <Button type="button" className='mx-2' variant="outline-primary">
                        <FaGoogle></FaGoogle>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip >
                            Sign in With GitHub
                        </Tooltip>}
                >
                    <Button type="button" className='mx-2' variant="outline-dark">
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
                <p>Not a member? <a href="#!">Register</a></p>
            </div>
        </Form>
    </div>
    );
};

export default Login;