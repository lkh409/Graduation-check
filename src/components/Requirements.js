import React from 'react';
import '../styles//Requirements.css';


const Requirements = () => {
  return (
    <div className="Req-BoxWrapperse">
      <h2 className="Req-Title">학과 졸업요건</h2>
      <button className="Req-EditButton">수정하기</button>
      <div className="Req-Text">
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-OptionalText">(선택)</span> TOEIC
        <span>&nbsp;&nbsp;&nbsp;</span>
         <span className="Req-Achievement">달성</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-MandatoryText">(필수)</span> 캡스톤 디자인
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="Req-Unachieved">미달성</span>
      </div>
    </div>
  );
};

export default Requirements;








