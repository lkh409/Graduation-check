import React, { useState } from 'react';
import '../styles/Major.css';

const Major = () => {
  // 편집 모드 상태를 관리할 useState
  const [editMode, setEditMode] = useState(false);

  // 수정하기 버튼 클릭 시 호출되는 함수
  const handleEditClick = () => {
    // 편집 모드 상태를 변경하여 편집 모드로 전환
    setEditMode(!editMode);
  };

  return (
    <div className="Maj-BoxWrapp">
      <div>
        <h2 className="Maj-Title">전공</h2>
        <button className="Maj-EditButton" onClick={handleEditClick}>
          {editMode ? '저장하기' : '수정하기'}
        </button>
      </div>
      <div className="Maj-RowContaine">
        <div className="Maj-DescriptionContainer">
          <p className="Maj-Description">전공 필수</p>
          <p className="Maj-Description">전공 선택</p>
        </div>
        <div className="Maj-CreditsContainer">
          <div className="Maj-Credits">
            {editMode ? <input type="text" defaultValue="0" /> : "0"} / 0
          </div>
          <div className="Maj-Credits">
            {editMode ? <input type="text" defaultValue="0" /> : "0"} / 0
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



















