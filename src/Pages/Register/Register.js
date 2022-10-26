import React from 'react';
import { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
     const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
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

                <div className='d-flex justify-content-center mb-3'> 
                    <Button type="submit" class="btn  btn-primary btn-block mb-4">Register</Button>
                </div>


                <div class="text-center">
                    <p>Already a member? <a href="#!">Sign in</a></p>
                </div>
            </Form>
        </div>
    );
};

export default Register;