import React from 'react';
import PieCheck from './Check_Pie';

function MainContentContainer3({title}) {
  // 기준 학점과 이수 학점 데이터
  const 기준학점 = 27;
  const 이수학점 = 20;

  return (
    <div className="main-content">
      <div className='check-area'>
        <h2>{title}</h2>
        <div className='check-chart'>
          <PieCheck 기준학점={기준학점} 이수학점={이수학점} />
          <div className='check-info'>
            <h3>기준 학점
              <span className='check-num'>{기준학점}</span>
              </h3>
            <h3>이수 학점
              <span className='check-num'>{이수학점}</span>
              </h3>
            <button className='recommend-btn'>추천하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentContainer3;
