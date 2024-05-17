import React from 'react';
import CheckBar from './Check_bar';

function GraduationCheck() {
  // 임시로 학점 데이터 설정
  const stdCredits = [7, 14, 18, 24, 14, 50];
  const preCredits = [7, 10, 24, 10, 6, 12];

  // preCredits와 stdCredits의 값을 모두 합쳐서 GraduationCheck 컴포넌트에 전달
  return (
    <div>
      <CheckBar preCredits={preCredits} stdCredits={stdCredits} />
    </div>
  );
}

export default GraduationCheck;

