// MainContentContainer3.js
import React, { useState, useEffect } from 'react';
import PieCheck from './Check_Pie';
import RecommendationPopup from './Recommendation_Popup';
import { honey_data } from './Honey_item';

function MainContentContainer3({ title, stdcredit, precredit }) {
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
        <h2>{title}</h2>
        <div className='check-chart'>
          <PieCheck stdCredit={stdcredit} preCredit={precredit} />
          <div className='check-info'>
            <h3>기준 학점
              <span className='check-num'>{stdcredit}</span>
            </h3>
            <h3>이수 학점
              <span className='check-num'>{precredit}</span>
            </h3>
            <button className='recommend-btn' onClick={() => togglePopup(title)}>
              추천하기
            </button>
            <RecommendationPopup isOpen={isPopupOpen} onClose={closePopup} details={[title, stdcredit, precredit, <PieCheck/>]} filteredData={filteredData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentContainer3;
