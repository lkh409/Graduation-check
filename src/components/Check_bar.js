import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


function CheckBar({ preCredits, stdCredits }) {
  // preCredits와 stdCredits의 값을 모두 합산하여 졸업 달성도 계산
  const totalPreCredits = preCredits.reduce((total, credits, index) => {
    return total + Math.min(credits, stdCredits[index]);
  }, 0);

  const totalStdCredits = stdCredits.reduce((total, credits) => total + credits, 0);
  const totalRatio = Math.round((totalPreCredits / totalStdCredits) * 100);

  const data = [
    { name: '', 달성도: totalRatio }
  ];

  return (
    <div style={{ width: '95%', height: 150 }}>
      <h3 className="bar-text">{`현재 졸업 달성도는 ${totalRatio} % 입니다.`}</h3>
      <ResponsiveContainer width="100%" height="65%">
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name"/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="달성도" fill="#8884d8" background={{ fill: '#eee' }} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CheckBar;
