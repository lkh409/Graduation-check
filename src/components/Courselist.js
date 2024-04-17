import React from 'react';
import '../styles/Courselist.css'; // Import CSS file
const CourseList = () => {
  return (
    <div className="Cor-BoxWrapping">
      <div>
        <h3>수강과목 리스트</h3>
        <div className="Cor-LineWrapper">
          <div className="Cor-Line">
            <span className="Cor-RowText">Row1</span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText">Row2</span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText">Row3</span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText">Row4</span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText">Row5</span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText">Row6</span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText">Row7</span>
          </div>
        </div>
      </div>
      <div className="Cor-Col" style={{ right: '350px' }}>
        <div>Col2</div>
      </div>
      <div className="Cor-Col" style={{ right: '200px' }}>
        <div>Col3</div>
      </div>
    </div>
  );
};

export default CourseList;




















