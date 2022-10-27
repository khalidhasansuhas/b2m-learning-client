import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='shadow ms-5 p-3 mb-5 bg-body rounded'>
            <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
            <Accordion className='mb-5'>
                <Accordion.Item >
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Reason of using Firebase:
                        <br />
                        Firebase Hosting works out-of-the-box with Firebase services, including Cloud Functions, Authentication, Realtime Database, Cloud Firestore, and Cloud Messaging. You can build powerful microservices and web apps using these complementary Firebase services.
                        <br />
                        other options:
                        Okta, MongoDB,Passport, Keycloak.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components  children  if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node is the most popular platform for hosting and running web servers for React apps. After all, using NPM Node Package Manager, you can install any package with NPM command-line interface CLI. Moreover, Node utilizes Webpack and other modules to turn a React application into an easily compilable single file.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    );
};

export default Faq;