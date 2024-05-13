//develop3

import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"; // 차트 라이브러리

const 기준학점 = 27; // 기준 학점  임시 설정
const 이수학점 = 20; // 이수 학점 임시 설정

const COLORS = ["#FFC0CB", "#FFFFFF", "#8884d8"];

export default class PieCheck extends PureComponent {
  render() {
    // 이수 학점을 기준 학점에 대한 비율로 계산, 그래프 각도 조절용
    const 비율 = (이수학점 / 기준학점) * 100;

    // 차트 데이터 임시 설정
    const data = [
      { name: "이수 학점", value: 비율 },
      { name: "기준 학점", value: 100 - 비율 },
    ];

    return (
      <ResponsiveContainer width={200} height={160}>
        {" "}
        {/*recharts에서 기본적으로 제공하는 컴포넌트, 차트 크기 반응형으로 조정 */}
        <PieChart>
          {" "}
          {/*원형 차트 컨테이너 */}
          <Pie // 원형 차트를 그리는 컴포넌트
            data={data} // 위에서 설정한 데이터 전달
            cx="50%" //원의 중심 x위치
            cy="50%" //원의 중심 y위치
            innerRadius={50} // 내부 반지름
            outerRadius={60} // 외부 반지름
            startAngle={90} // 차트 시작 각도
            endAngle={450} // 차트 끝 각도
            fill="#8884d8" // 차트 원 채울 색상
            paddingAngle={0} // 각 부분 간의 간격
            dataKey="value" // 데이터 값에 해당하는 키 지정
          >
            {data.map(
              (
                entry,
                index // data 배열의 각 요소 순회하고, 각 요소에 대해 새로운 Cell 컴포넌트 생성 후 반환. Cell 컴포넌트는 차트의 각 부분을 나타내고 색상은 COLORS배열에서 결정
              ) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} /> // key 안의 내용은 고유 키값을 할당하는 용도
              )
            )}
          </Pie>
          <Pie // 두번째 파이 컴포넌트는 바깥쪽 기준원을 그리기 위해 설정
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
