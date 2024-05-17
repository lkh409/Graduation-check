import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts"; // 차트 라이브러리

const COLORS = ["#FFC0CB", "#FFFFFF", "#8884d8"];

class PieCheck extends PureComponent {
  state = {
    labelOpacity: 0, // 라벨 투명도 초기값 설정
  };

  componentDidMount() {
    // 컴포넌트가 마운트된 후에 라벨 투명도를 천천히 증가시키는 애니메이션 적용
    setTimeout(() => {
      this.setState({ labelOpacity: 1 });
    }, 1500); // 1.5초 후에 라벨 투명도를 1로 설정
  }

  render() {
    // 이수 학점을 기준 학점에 대한 비율로 계산, 그래프 각도 조절용
    const { stdCredit, preCredit } = this.props;
    let ratio = Math.floor((preCredit / stdCredit) * 100); // ratio 값을 정수로 변환
    if (preCredit >= stdCredit) {
      ratio = 100;
    }

    // 차트 데이터 임시 설정
    const data = [
      { name: "이수 학점", value: ratio },
      { name: "기준 학점", value: 100 - ratio },
    ];

    const { labelOpacity } = this.state;

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
            <Label
              value={`${ratio}%`}
              position="center"
              fill="#000"
              fontSize={16}
              opacity={labelOpacity}
              style={{
                transition: "opacity 1s ease-in-out",
              }}
            />
          </Pie>
          <Pie
            data={[{ value: 100 }]}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            startAngle={90}
            endAngle={450}
            fill="none"
            stroke="black"
            strokeWidth={1}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieCheck;
