import React, { useState, useEffect } from 'react';
import '../styles/Major.css';

const EditableCredit = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.split('/')[0]);
  const [totalValue] = useState(value.split('/')[1]);
  const [isValid, setIsValid] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setEditValue(newValue);
      onChange(newValue + '/' + totalValue);
    }
    setIsValid(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    onChange(editValue + '/' + totalValue);
  };

  useEffect(() => {
    if (parseInt(editValue) === parseInt(totalValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [editValue, totalValue]);

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
          style={{ width: '40px' }}
        />
      ) : (
        <span onClick={handleEdit} className={isValid ? 'blue' : 'red'}>{editValue}/{totalValue}</span>
      )}
    </>
  );
};

const Major = () => {
  return (
    <div className="Maj-BoxWrapp">
      <div>
        <h2 className="Maj-Title">전공</h2>
        <button className="Maj-EditButton">수정하기</button>
      </div>
      <div className="Maj-RowContaine">
        <div className="Maj-DescriptionContainer">
          <p className="Maj-Description">전공 필수</p>
          <p className="Maj-Description">전공 선택</p>
        </div>
        <div className="Maj-EditableCreditsContainer">
          <div>
            <EditableCredit value="25/30" onChange={(newValue) => console.log(newValue)} />
          </div>
          <div>
            <EditableCredit value="20/20" onChange={(newValue) => console.log(newValue)} />
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
















