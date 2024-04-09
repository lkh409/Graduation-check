import React from 'react';
import Honey_list from './Honey_list';
import './HoneyBoard.css';

function HoneyBoard() {
  return (
    <div className='honey-main-container'>
      <h2>꿀교양 게시판</h2>
      <div className='honey-category'>
        <h3>(조건 선택하는 곳)</h3>
        <h3>여긴 어떤 방식으로 만들지 나중에 선택하기로</h3>
      </div>
      <h2>교양순위</h2>
      <div className='honey-list'>
        <Honey_list/>
      </div>
    </div>
  );
}

export default HoneyBoard;
