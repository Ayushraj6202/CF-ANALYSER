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
  const yAxisMax = Math.ceil(maxRating / 100) * 100 + 200; // Round up to the nearest hundred

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={formatData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* Adding colored reference areas for rating bands */}
          <ReferenceArea y1={0} y2={1199} fill="#808080" alwaysShow /> {/* Gray */}
          <ReferenceArea y1={1200} y2={1399} fill="#00FF00" alwaysShow /> {/* Green */}
          <ReferenceArea y1={1400} y2={1599} fill="#00FFFF" alwaysShow /> {/* Cyan */}
          <ReferenceArea y1={Math.min(1600,yAxisMax)} y2={Math.min(1899,yAxisMax)} fill="#0000FF" alwaysShow /> {/* Blue */}
          <ReferenceArea y1={Math.min(1900,yAxisMax)} y2={Math.min(2099,yAxisMax)} fill="#AA00AA" alwaysShow /> 
          <ReferenceArea y1={Math.min(2100,yAxisMax)} y2={Math.min(2299,yAxisMax)} fill="#FF8C00" alwaysShow /> 
          <ReferenceArea y1={Math.min(2300,yAxisMax)} y2={Math.min(2399,yAxisMax)} fill="#FF8C00" alwaysShow /> 
          <ReferenceArea y1={Math.min(2400,yAxisMax)} y2={Math.min(2899,yAxisMax)} fill="#FF0000" alwaysShow /> 
          <ReferenceArea y1={Math.min(2900,yAxisMax)} y2={yAxisMax} fill="#FF0000" alwaysShow /> 

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ratingUpdateTime" />
          <YAxis domain={[0, yAxisMax]} /> /* Adjust Y-axis domain
          <Tooltip />
          <Legend />

          /* Line color updated to yellow */
          <Line type="monotone" dataKey="newRating" stroke="#FFD700" dot={{ stroke: '#FFD700', strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinePlot;
