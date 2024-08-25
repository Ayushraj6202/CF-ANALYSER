import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Count',
    },
  ],
  series: [{ dataKey: 'count', label: 'Rating Vs Count', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function BarGraph({ dataset }) {
  // Transform the dataset from an object to an array of objects
  const transformedDataset = Object.entries(dataset) // Exclude the last entry
    .map(([rating, count]) => ({
      rating: Number(rating),
      count,
    }));

  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={transformedDataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'rating', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
