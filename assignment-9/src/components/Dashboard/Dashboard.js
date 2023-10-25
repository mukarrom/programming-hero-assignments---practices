import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import MyComposedChart from '../MyComposedChart/MyComposedChart';
const Dashboard = () => {
    
    return (
        <div className='grid lg:grid-cols-2 gap-3 w-11/12 mx-auto'>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
            <MyPieChart></MyPieChart>
            <MyComposedChart></MyComposedChart>
        </div>
    );
};

export default Dashboard;