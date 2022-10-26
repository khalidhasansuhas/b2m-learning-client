import React from 'react';
import { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CourseContext } from '../../layout/Main';


const BarCharts = () => {
    const loadCourse = useContext(CourseContext)
    console.log(loadCourse)
    return (
       
        
        
        <>
        <h3> Employment Chart</h3>
        <BarChart
                width={250}
                height={300}
                margin={'auto'}
                data={loadCourse}>
                <Bar dataKey="employed" fill="#8884d8" />

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
        </BarChart>
        </>
     
    
    );
};

export default BarCharts;