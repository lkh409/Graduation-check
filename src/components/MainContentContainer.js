//develop3
import React, { useState } from 'react';
import PieCheck from './Check_Pie';
import RecommendationPopup from './Recommendation_Popup';
import { honey_data } from './Honey_item';

function MainContentContainer3({ title }) { // 과정 구분(ex: 기초교양, 일반교양)을 Check_page3.js에서 차트 제목으로 받아 불러옴
  // 기준 학점과 이수 학점 데이터, 아직 Check_Pie.js의 차트 데이터와 연동되지 않아서 텍스트만 바뀜
  const 기준학점 = 27;
  const 이수학점 = 20;

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const togglePopup = (title) => {
    setSelectedArea(title);
    setPopupOpen(!isPopupOpen);
  }
  const closePopup = () => {
    setPopupOpen(false);
  }

  const filteredData = honey_data.filter(item => item.choose === selectedArea);


  return (
    <div className="main-content">
      <div className='check-area'>
        <h2>{title}</h2> {/*차트 이름 표시 */}
        <div className='check-chart'> {/*그래프 영역 */}
          <PieCheck 기준학점={기준학점} 이수학점={이수학점} /> {/*Check_Pie.js의 PieCheck컴포넌트 가져옴. 위에 설정한 임시 학점 데이터를 텍스트 값으로 넘겨줌 */}
          <div className='check-info'> {/*그래프 옆 텍스트와 버튼이 들어가는 영역 */}
            <h3>기준 학점
              <span className='check-num'>{기준학점}</span> {/*span 함수로 텍스트 간 간격 띄움 */}
            </h3>
            <h3>이수 학점
              <span className='check-num'>{이수학점}</span>
            </h3>
            <button className='recommend-btn' onClick={() => togglePopup(title)}>
              추천하기
            </button>
            <RecommendationPopup isOpen={isPopupOpen} onClose={closePopup} details={[title, 기준학점, 이수학점, <PieCheck/>]} filteredData={filteredData}/>
            {/* <Link to="/honeyboard" className='recommend-btn-text'>추천하기</Link>*/} {/*링크로 버튼누르면 추천페이지 연결되도록 설정 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentContainer3;
