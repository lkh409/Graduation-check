import React, { useState } from 'react';
import '../styles/LiberalArts.css'; // 외부 CSS 파일 import

const LiberalArts = () => {
  // 각 학점의 초기값 설정
  const [credits] = useState({
    required: { value: 6, total: 10 },
    elective: { value: 18, total: 18 },
    general: { value: 12, total: 14 }
  });

  return (
    <div className="Lib-BoxWrap">
     <button className="Lib-EditButton">수정하기</button>
      <h3 className="Lib-Title">교양</h3>
      <div className="Lib-CreditContain">
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">필수 교양</span>
          <span className="Lib-CreditValue">{credits.required.value} / {credits.required.total}</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">자유 교양</span>
          <span className="Lib-CreditValue">{credits.elective.value} / {credits.elective.total}</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">일반 교양</span>
          <span className="Lib-CreditValue">{credits.general.value} / {credits.general.total}</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">1영역 교양</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">2영역 교양</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">3영역 교양</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditLabel">4영역 교양</span>
        </div>
      </div>
      <div className="Lib-CreditWrap">
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit">학점</p>
        <p className="Lib-Credit isIncomplete">미이수</p>
        <p className="Lib-Credit isIncomplete">미이수</p>
        <p className="Lib-Credit isIncomplete">미이수</p>
        <p className="Lib-Credit isIncomplete">미이수</p>
      </div>
    </div>
  );
}

export default LiberalArts;