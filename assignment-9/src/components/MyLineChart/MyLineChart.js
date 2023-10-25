import React, { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div style={{width:'100%', height: 300}} className='rounded-lg shadow-md m-1 mx-auto'>
      <ResponsiveContainer>
      <LineChart  data={datas}>
      <Line dataKey={"investment"}></Line>
      <Line dataKey={"revenue"}></Line>
      <XAxis dataKey="month"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
