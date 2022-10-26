import React from 'react';
import { useContext } from 'react';

import { CourseContext } from '../../layout/Main';


const Home = () => {
    const loadCourse = useContext(CourseContext)
    console.log(loadCourse)
    return (
       
        
      <div></div>
    
    );
};

export default Home;