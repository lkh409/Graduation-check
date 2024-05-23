import React, { useState } from 'react';
import '../styles/Requirements.css';

const Requirements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [addedItems, setAddedItems] = useState([]);
  const [mandatoryInput, setMandatoryInput] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const addItem = () => {
    if (selectedOption) {
      setAddedItems([...addedItems, selectedOption]);
      setSelectedOption(''); // Reset dropdown
    }
  };

  const addMandatoryItem = () => {
    if (mandatoryInput) {
      setAddedItems([...addedItems, mandatoryInput]);
      setMandatoryInput(''); // Reset input
    }
  };

  const removeItem = (index) => {
    setAddedItems(addedItems.filter((_, i) => i !== index));
  };

  return (
    <div className="Req-BoxWrapperse">
      <h2 className="Req-Title">학과 졸업요건</h2>
      <button className="Req-EditButton" onClick={openModal}>수정하기</button>
      <div className="Req-Text">
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-OptionalText">(선택)</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-Achievement">달성</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-MandatoryText">(필수)</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-Unachieved">미달성</span>
      </div>

      {isModalOpen && (
        <div className="Req-Modal">
          <div className="Req-ModalContent">
            <button className="Req-CloseButton" onClick={closeModal}>X</button> {/* Close button */}
            <h3>졸업 요건 수정</h3>
            <div className="Req-Sections">
              <div className="Req-Section">
                <div className="Req-InputWrapper">
                  <label className="Req-InputLabel">필수:</label>
                  <input
                    type="text"
                    className="Req-Input"
                    placeholder="필수 항목을 입력하세요"
                    value={mandatoryInput}
                    onChange={(e) => setMandatoryInput(e.target.value)}
                  />
                  <button className="Req-AddButton" onClick={addMandatoryItem}>+</button>
                </div>
              </div>
              <div className="Req-Section">
                <div className="Req-InputWrapper">
                  <label className="Req-InputLabel">선택:</label>
                  <select className="Req-Dropdown" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">------ 선택 항목 ------</option>
                    <option value="TOEIC">TOEIC</option>
                    <option value="선택 항목2">선택 항목 2</option>
                    <option value="선택 항목3">선택 항목 3</option>
                  </select>
                  <button className="Req-AddButton" onClick={addItem}>+</button>
                </div>
              </div>
            </div>
            <div className="Req-AddedItems">
              {addedItems.map((item, index) => (
                <div key={index} className="Req-AddedItem">
                  {item}
                  <button className="Req-DeleteButton" onClick={() => removeItem(index)}>삭제</button>
                </div>
              ))}
            </div>
            <button className="Req-AddSubjectButton" onClick={closeModal}>추가하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requirements;























