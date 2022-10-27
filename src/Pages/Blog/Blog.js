import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div >
            <Card className='container me-4 ms-4 mb-5 shadow  p-3  bg-body rounded'>
                <Card.Header>React js</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality..[5]{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Jordan Walke about <cite title="Source Title">React </cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='container me-4 ms-4 mb-5 shadow  p-3  bg-body rounded'>
                <Card.Header>MERN Stack Development</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            MEAN (MongoDB, Express.js, AngularJS (or Angular), and Node.js)[1] is a free and open-source JavaScript software stack for building dynamic web sites and web applications.[2] A variation known as MERN replaces Angular with React.

                            Because all components of the MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments.

                            Though often compared directly to other popular web development stacks such as the LAMP stack, the components of the MEAN stack are higher-level including a web application presentation layer and not including an operating system layer.[3]

                            The acronym MEAN was coined by Valeri Karpov.[4] He introduced the term in a 2013 blog post and the logo concept, initially created by Austin Anderson for the original MEAN stack LinkedIn group, is an assembly of the first letter of each component of the MEAN acronym.[5]{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Wikipedia about <cite title="Source Title">MERN Stack</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Blog;