import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [{ label: 'Submission Count' }],
  series: [{ dataKey: 'count', label: 'Rating Vs Count', valueFormatter }],
  height: window.innerWidth < 768 ? 250 : 300, // Adjust height based on screen size
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function BarGraph({ dataset }) {
  const transformedDataset = Object.entries(dataset).map(([rating, count]) => ({
    rating: Number(rating),
    count,
  }));

  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ width: '100%', maxHeight: '400px', overflowY: 'auto' }} className="chart-container">
      <BarChart className='bg-slate-300 mt-5 mx-auto p-1'
        dataset={transformedDataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'rating', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
