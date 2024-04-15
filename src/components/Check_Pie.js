import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const 기준학점 = 27; // 기준 학점 설정
const 이수학점 = 20; // 이수 학점 설정

const COLORS = ['#FFC0CB', '#FFFFFF', '#8884d8'];

export default class PieCheck extends PureComponent {
  render() {
    // 이수 학점을 기준 학점에 대한 비율로 계산
    const 비율 = 이수학점 / 기준학점 * 100;

    // Pie 차트 데이터 설정
    const data = [
      { name: '이수 학점', value: 비율 },
      { name: '기준 학점', value: 100 - 비율 }
    ];

    return (
      <ResponsiveContainer width={200} height={160}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            startAngle={90}
            endAngle={450}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Pie
            data={[{ value: 100 }]} // 원 테두리를 위한 가짜 데이터
            cx="50%"
            cy="50%"
            innerRadius={62}
            outerRadius={70}
            startAngle={90}
            endAngle={450}
            fill="#FFC0CB80"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
