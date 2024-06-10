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

  const handleMandatoryInputChange = (e) => {
    setMandatoryInput(e.target.value);
  };

  const handleAddItem = (type) => {
    const input = type === 'optional' ? selectedOption : mandatoryInput;
    if (input) {
      const newItem = { text: input, type };
      setAddedItems([...addedItems, newItem]);
      type === 'optional' ? setSelectedOption('') : setMandatoryInput('');
    }
  };

  const removeItem = (index) => {
    setAddedItems(addedItems.filter((_, i) => i !== index));
  };

  const handleAddSubject = () => {
    closeModal();
  };

  const mandatoryItems = addedItems.filter(item => item.type === 'mandatory');
  const optionalItems = addedItems.filter(item => item.type === 'optional');

  return (
    <div className="Req-BoxWrapperse">
      <div className='Req-BoxHeader'>
        <h2 className="Req-Title">학과 졸업요건</h2>
        <button className="Req-EditButton" onClick={openModal}>수정하기</button>
      </div>
      <div className="Req">
        <div>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="Req-MandatoryText">(필수)</span>
          {mandatoryItems.map((item, index) => (
            <div key={index} className="Req-AddItem">
              {item.text}  
            </div>
          ))}
        </div>
        <div>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="Req-OptionalText">(선택)</span>
          {optionalItems.map((item, index) => (
            <div key={index} className="Req-AddsItem">
              {item.text} 
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="Req-ModalBackground">
          <div className="Req-Modal">
            <button className="Req-CloseButton" onClick={closeModal}>X</button>
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
                    onChange={(e) => handleMandatoryInputChange(e)}
              
                  />
                  <button className="Req-AButton" onClick={() => handleAddItem('mandatory')}>+</button>
                </div>
              </div>
              <div className="Req-Section">
                <div className="Req-InputWrapper">
                  <label className="Req-InputLabel">선택:</label>
                  <input
                    type="text"
                    className="Req-Input"
                    placeholder="선택 항목을 입력하세요"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
    
                  />
                  <button className="Req-AddButton" onClick={() => handleAddItem('optional')}>+</button>
                </div>
              </div>
            </div>
            <div className="Req-AddedItems">
              {mandatoryItems.map((item, index) => (
                <div key={index} className="Req-AddedItem">
                  <span className="Req-AddedItemText">{item.text}</span>
                  {isModalOpen && (
                    <button className="Req-DeleteButton" onClick={() => removeItem(index)}>삭제</button>
                  )}
                </div>
              ))}
              {optionalItems.map((item, index) => (
                <div key={index} className="Req-AddedItem">
                  <span className="Req-AddedItemText">{item.text}</span>
                  {isModalOpen && (
                    <button className="Req-DButton" onClick={() => removeItem(index)}>삭제</button>
                  )}
                </div>
              ))}
            </div>
            <button className="Req-AddSubjectButton" onClick={handleAddSubject}>추가하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requirements;
