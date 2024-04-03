/* 그래프 샘플 */
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Check extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: '영역 1',
        달성도: 40,
        pv: 24,
        amt: 2400,
      },
      {
        name: '영역 2',
        달성도: 30,
        pv: 13,
        amt: 2210,
      },
      {
        name: '영역 3',
        달성도: 20,
        pv: 98,
        amt: 2290,
      },
      {
        name: '영역 4',
        달성도: 27,
        pv: 39,
        amt: 2000,
      },
      {
        name: '영역 5',
        달성도: 90,
        pv: 48,
        amt: 2181,
      },
      {
        name: '영역 6',
        달성도: 23,
        pv: 38,
        amt: 2500,
      },
      {
        name: '영역 7',
        달성도: 49,
        pv: 43,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%', height: 400 }}>
        <p>클릭을 통해 영역별로 더 자세히 확인할 수 있습니다. </p>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart layout="vertical" width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" domain={[0, 100]} tickCount={6}/>
            <YAxis type="category" interval={0} dataKey="name" domain={[0, 100]}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar maxBarSize={100} dataKey="달성도" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`현재 달성도는 "${activeItem.name}": ${activeItem.달성도} 입니다.`}</p>
      </div>
    );
  }
}