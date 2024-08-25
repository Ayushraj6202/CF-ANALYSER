import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ReferenceArea, ResponsiveContainer } from 'recharts';

const LinePlot = ({ data }) => {
  // Convert the timestamp to a readable date format for the x-axis
  const formatData = data.map(item => ({
    ...item,
    ratingUpdateTime: new Date(item.ratingUpdateTimeSeconds * 1000).toLocaleDateString(), // Format the date
  }));

  // Calculate the max rating to adjust the Y-axis dynamically
  const maxRating = Math.max(...data.map(item => item.newRating));
  const yAxisMax = Math.ceil(maxRating / 100) * 100; // Round up to the nearest hundred

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={formatData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* Adding colored reference areas for rating bands */}
          <ReferenceArea y1={0} y2={1199} fill="#d1d1d1" alwaysShow /> {/* Gray */}
          <ReferenceArea y1={1200} y2={1399} fill="#00FF00" alwaysShow /> {/* Green */}
          <ReferenceArea y1={1400} y2={1599} fill="#00FFFF" alwaysShow /> {/* Cyan */}
          <ReferenceArea y1={1600} y2={1899} fill="#0000FF" alwaysShow /> {/* Blue */}
          <ReferenceArea y1={1900} y2={2199} fill="#EE82EE" alwaysShow /> {/* Violet */}
          <ReferenceArea y1={2200} y2={2299} fill="#FFA500" alwaysShow /> {/* Orange */}
          <ReferenceArea y1={2300} y2={2399} fill="#FFA500" alwaysShow /> {/* Orange */}
          <ReferenceArea y1={2400} y2={2899} fill="#FF0000" alwaysShow /> {/* Red */}
          <ReferenceArea y1={2900} y2={yAxisMax} fill="#FF0000" alwaysShow /> {/* Red - Legendary */}

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ratingUpdateTime" />
          <YAxis domain={[0, yAxisMax]} /> {/* Adjust Y-axis domain */}
          <Tooltip />
          <Legend />

          {/* Line color updated to yellow */}
          <Line type="monotone" dataKey="newRating" stroke="#FFD700" dot={{ stroke: '#FFD700', strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinePlot;
