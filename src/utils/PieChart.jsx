import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'; 

const MyPieChart = ({ data }) => {
  const sortedData = Object.entries(data)
    .map(([key, value]) => ({
      name: value.id,
      value: value.value,
      color: value.color, // We'll replace this with a blue-cyan palette
    }))
    .sort((a, b) => b.value - a.value);

  // Predefined color palette in shades of blue and cyan
  const colorPalette = ['#1ABC9C', '#00BFFF', '#00FFFF', '#1E90FF', '#5F9EA0', '#4682B4', '#87CEFA', '#ADD8E6'];

  return (
    <div className="pie-chart-container " style={{ position: 'relative', width: '400px', height: '400px' }}>
      <PieChart width={400} height={300}>
        <Pie
          data={sortedData}
          dataKey="value"
          nameKey="name"
          innerRadius={30}
          outerRadius={100}
          paddingAngle={5}
          cornerRadius={5}
          startAngle={90} // Start the chart at 0 degrees
          endAngle={450} // Ensure it ends at 360 degrees
        >
          {sortedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} /> // Use the blue-cyan palette
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ position: 'absolute', top: '20px', left: '300px' }} // Adjust position as needed
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
