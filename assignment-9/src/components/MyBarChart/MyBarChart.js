import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      fetch("chartData.json")
        .then((res) => res.json())
        .then((data) => setDatas(data));
    }, []);
       
    return (
      <div style={{width:'100%', height: 300}} className='rounded-lg shadow-md m-1 mx-auto'>
        <ResponsiveContainer>
        <BarChart data={datas}>
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="green" />
          <XAxis dataKey={'month'} />
          <YAxis />
          <Tooltip />
        </BarChart>
        </ResponsiveContainer>
      </div>
    );
};

export default SpecialChart;