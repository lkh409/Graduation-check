import React from 'react';
import '../styles/LiberalArts.css'; // 외부 CSS 파일 import

const LiberalArts = () => {
  // 각 교양 항목의 학점 값을 저장할 상태 정의



  return (
    <div className="Lib-BoxWrap">

      <h3 className="Lib-Title">교양</h3>
      <div className="Lib-CreditContain">
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">인성 교양</span>
          <span className='Lib-CreditValue'>0 / 0</span>
  
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">자유 교양</span>
          <span className='Lib-CreditValue'>0 / 0</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">기초 교양</span>
          <span className='Lib-CreditValue'>0 / 0</span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">일반 교양</span>
          <span className='Lib-CreditValue'>0 / 0</span>
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




























