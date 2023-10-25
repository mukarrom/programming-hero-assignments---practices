import React, { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const MyPieChart = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div style={{width:'100%', height:300}} className='rounded-lg shadow-md m-1 mx-auto'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={datas}
            dataKey="sell"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={datas}
            dataKey="investment"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPieChart;
