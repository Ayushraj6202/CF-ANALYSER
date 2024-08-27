import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'; 

const MyPieChart = ({ data }) => {
  const sortedData = Object.entries(data)
    .map(([key, value]) => ({
      name: value.id,
      value: Number(value.value),
      color: value.color, // We'll replace this with a blue-cyan palette
    }))

  // Predefined color palette in shades of blue and cyan
  const colorPalette = ['#1ABC9C', '#00BFFF', '#00FFFF', '#1E90FF', '#5F9EA0', '#4682B4', '#87CEFA', '#ADD8E6'];
    // console.log(sortedData);
    
  return (
    <div className="pie-chart-container " style={{ position: 'relative', width: '400px', height: '300px' }}>
      <PieChart width={400} height={300}>
        <Pie
          data={sortedData}
          dataKey="value"
          nameKey="name"
          innerRadius={0}
          outerRadius={100}
          // paddingAngle={5}
          // cornerRadius={5}
          startAngle={90} 
          endAngle={450} 
        >
          {sortedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} /> // Use the blue-cyan palette
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => value.toFixed(2)} // Format values to 3 decimal places
        />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          // wrapperStyle={{ position: 'absolute', top: '10px', left: '260px' }} // Adjust position as needed
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
