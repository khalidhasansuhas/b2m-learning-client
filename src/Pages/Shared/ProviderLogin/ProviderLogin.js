import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const ProviderLogin = () => {
    const { providerLogin, setUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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

        </>
    );
};

export default ProviderLogin;