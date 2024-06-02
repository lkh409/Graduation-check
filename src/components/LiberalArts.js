import React, { useState, useEffect } from 'react';
import '../styles/LiberalArts.css'; // 외부 CSS 파일 import

const LiberalArts = ({ data }) => {
  const [credits, setCredits] = useState({
    인성교양: '0 / 0',
    자유교양: '0 / 0',
    기초교양: '0 / 0',
    일반교양: '0 / 0',
    영역1: '미이수',
    영역2: '미이수',
    영역3: '미이수',
    영역4: '미이수'
  });

  useEffect(() => {
    if (data) {
      setCredits({
        인성교양: `${data.인성교양.earned} / ${data.인성교양.total}`,
        자유교양: `${data.자유교양.earned} / ${data.자유교양.total}`,
        기초교양: `${data.기초교양.earned} / ${data.기초교양.total}`,
        일반교양: `${data.일반교양.earned} / ${data.일반교양.total}`,
        영역1: data.영역1 ? '이수' : '미이수',
        영역2: data.영역2 ? '이수' : '미이수',
        영역3: data.영역3 ? '이수' : '미이수',
        영역4: data.영역4 ? '이수' : '미이수'
      });
    }
  }, [data]);

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
