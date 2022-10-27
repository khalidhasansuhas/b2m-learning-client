import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const RightSideNav = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    const {providerLogin , setUser} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.error(error))
    }

    const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error=> console.error(error))
    }

    return (
        <div>
            <h3>All Courses</h3>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        
                        <ButtonGroup vertical className='w-100'>
                        <Button ><Link className='text-light' to={`/coursedetails/${course.id}`}>{course.name}</Link></Button>
                        </ButtonGroup>
                    </p>)
                }
            </div>
            <div class="text-center mb-3">
                <h3>Log in with:</h3>
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
        </div>
    );
};

export default RightSideNav;