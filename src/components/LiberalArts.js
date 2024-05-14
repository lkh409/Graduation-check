import React, { useState } from 'react';
import '../styles/LiberalArts.css'; // 외부 CSS 파일 import

const LiberalArts = () => {
  // 각 교양 항목의 학점 값을 저장할 상태 정의
  const [credits, setCredits] = useState({
    required: { value: 0, total: 0 },
    elective: { value: 0, total: 0 },
    general: { value: 0, total: 0 }
  });

  // 수정 가능한 상태를 저장할 상태 정의
  const [editMode, setEditMode] = useState(false);

  // 각 학점 값을 변경하는 함수
  const handleCreditChange = (type, newValue) => {
    setCredits(prevCredits => ({
      ...prevCredits,
      [type]: { ...prevCredits[type], value: newValue }
    }));
  };

  // '수정하기' 버튼 클릭 시 호출되는 함수
  const handleEditClick = () => {
    // 수정 가능한 상태로 변경
    setEditMode(!editMode);
  };

  return (
    <div className="Lib-BoxWrap">
      <button className="Lib-EditButton" onClick={handleEditClick}>
        {editMode ? '저장하기' : '수정하기'}
      </button>
      <h3 className="Lib-Title">교양</h3>
      <div className="Lib-CreditContain">
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">필수 교양</span>
          <span>
            {editMode ? (
              <input
                className="Lib-CreditInput"
                type="number"
                value={credits.required.value}
                onChange={(e) => handleCreditChange('required', parseInt(e.target.value))}
              />
            ) : (
              `${credits.required.value} / ${credits.required.total}`
            )}
          </span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">자유 교양</span>
          <span>
            {editMode ? (
              <input
                className="Lib-CreditInput"
                type="number"
                value={credits.elective.value}
                onChange={(e) => handleCreditChange('elective', parseInt(e.target.value))}
              />
            ) : (
              `${credits.elective.value} / ${credits.elective.total}`
            )}
          </span>
        </div>
        <div className="Lib-CreditItem">
          <span className="Lib-CreditTitle">일반 교양</span>
          <span>
            {editMode ? (
              <input
                className="Lib-CreditInput"
                type="number"
                value={credits.general.value}
                onChange={(e) => handleCreditChange('general', parseInt(e.target.value))}
              />
            ) : (
              `${credits.general.value} / ${credits.general.total}`
            )}
          </span>
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




























