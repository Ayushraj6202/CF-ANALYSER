import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


const MyPieChart = ({data}) => {

  return (
    <div>
      <PieChart
        // colors can be changed from here 
        colors={['green', 'red']}
        series={[
          {
            data: data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 0,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
            cx: 150,
            cy: 150,
          }
        ]}
        width={300}
        height={300}
      />
    </div>
  );
};

export default MyPieChart;
