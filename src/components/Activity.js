import React, { useState } from 'react';
import '../styles/Activity.css';

const Activity = () => {
  // 편집 모드 상태를 관리할 useState
  const [editMode, setEditMode] = useState(false);
  // 채플과 봉사의 값을 저장할 useState
  const [chapelValue, setChapelValue] = useState(0);
  const [serviceValue, setServiceValue] = useState(0);

  // 수정하기 버튼 클릭 시 호출되는 함수
  const handleEditClick = () => {
    // 편집 모드 상태를 변경하여 편집 모드로 전환
    setEditMode(!editMode);
  };

  // 저장하기 버튼 클릭 시 호출되는 함수
  const handleSaveClick = () => {
    // 수정된 값 저장
    // 채플과 봉사의 값을 각각의 state에 저장
    // 편집 모드를 해제하여 숫자 형태로 보여줍니다.
    console.log("채플 값:", chapelValue);
    console.log("봉사 값:", serviceValue);
    setEditMode(false); // 편집 모드 해제
  };

  return (
    <div className="Act-BoxWrappe">
      <div className='Act-box-titleAndEdit'>
        <h2 className="ActivityTitle">활동</h2>
        <button className="Act-EditButton" onClick={editMode ? handleSaveClick : handleEditClick}>
          {editMode ? '저장하기' : '수정하기'}
        </button>
      </div>
      <div className="Act-TagContainer">
        <div className="Act-TagAndInputContainer">
          <div className="Act-CreditWrapper">
            {editMode ? (
              <input 
                className="Act-Input" 
                type="text" 
                defaultValue={chapelValue} 
                onChange={(e) => setChapelValue(e.target.value)} 
              />
            ) : (
              chapelValue
            )} / 0
          </div>
          <span className="Act-Tag">채플</span>
        </div>
      </div>
      <div className="Act-TagContainer">
        <div className="Act-TagAndInputContainer">
          <div className="Act-CreditWrapper">
            {editMode ? (
              <input 
                className="Act-Input" 
                type="text" 
                defaultValue={serviceValue} 
                onChange={(e) => setServiceValue(e.target.value)} 
              />
            ) : (
              serviceValue
            )} / 0
          </div>
          <span className="Act-Tag">봉사</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;





















