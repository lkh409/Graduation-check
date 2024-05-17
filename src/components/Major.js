import React, { useState } from 'react';
import '../styles/Major.css';

const Major = () => {
  // 편집 모드 상태를 관리할 useState
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="Maj-BoxWrapp">
      <div>
        <h2 className="Maj-Title">전공</h2>
      
      </div>
      <div className="Maj-RowContaine">
        <div className="Maj-DescriptionContainer">
          <p className="Maj-Description">전공 필수</p>
          <p className="Maj-Description">전공 선택</p>
        </div>
        <div className="Maj-CreditsContainer">
          <div className="Maj-Credits">
           0 / 0
          </div>
          <div className="Maj-Credits">
           0 / 0
          </div>
        </div>
        <div className="Maj-DescriptionContainer">
          <p className="Maj-Description">학점</p>
          <p className="Maj-Description">학점</p>
        </div>
      </div>
    </div>
  );
};

export default Major;



















