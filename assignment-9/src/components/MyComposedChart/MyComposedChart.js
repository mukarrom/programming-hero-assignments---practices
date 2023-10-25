import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyComposedChart = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div style={{ width: '100%', height:'300px' }} className='rounded-lg shadow-md m-1 mx-auto'>
    <ResponsiveContainer>
      <ComposedChart
        data={datas}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="investment" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
  );
};

export default MyComposedChart;


