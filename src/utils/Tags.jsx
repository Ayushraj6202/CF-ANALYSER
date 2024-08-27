import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MyPieChart = ({ data }) => {
  // Transform and sort the data object
  const sortedData = Object.entries(data)
    .map(([key, value]) => ({
      name: key,
      value,
      color: getRandomColor(), // Assign a random color to each entry
    }))
    .sort((a, b) => b.value - a.value); // Sort by value in descending order

  return (
    <div className="pie-chart-container " style={{ position: 'relative', width: '400px', height: '300px' }}>
      <PieChart width={400} height={300}>
        <Pie
          data={sortedData}
          dataKey="value"
          nameKey="name"
          // innerRadius={30}
          outerRadius={100}
          // paddingAngle={5}
          // cornerRadius={5}
          startAngle={90} 
          endAngle={540}
        >
          {sortedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ position: 'absolute', top: '20px', left: '300px' }} // Adjust position as needed
        /> */}
      </PieChart>
    </div>
  );
};

export default MyPieChart;
