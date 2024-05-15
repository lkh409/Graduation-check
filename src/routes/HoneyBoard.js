//develop3

import React, { useState } from 'react';
import Honey_list from '../components/Honey_list';
import '../styles/HoneyBoard.css';
import DropdownBtn from '../components/Dropdown_btn';
import { honey_data } from '../components/Honey_item';

function HoneyBoard() {
  {/*필터링에 필요한 상태들 관리 */}
  const [creditFilter, setCreditFilter] = useState(null); // 학점 관련
  const [areaFilter, setAreaFilter] = useState(null); // 선택영역 관련
  const [chooseFilter, setChooseFilter] = useState(null); // 이수구분 관련
  const [sortBy, setSortBy] = useState(0); // 수강횟수 정렬 관련

  const applyFilters = () => { //필터링 기능 함수. 카테고리 버튼을 통해 원하는 값을 선택할 때마다 if문의 조건에 따라 올바르게 필터링 될 수 있도록 설정
    let filteredData = honey_data.filter(item => {
      if (creditFilter && areaFilter && chooseFilter) {
        return item.credit === creditFilter && item.choose === areaFilter && item.kind === chooseFilter;
      } else if (creditFilter && areaFilter) {
        return item.credit === creditFilter && item.choose === areaFilter;
      } else if (creditFilter && chooseFilter) {
        return item.credit === creditFilter && item.kind === chooseFilter;
      } else if (areaFilter && chooseFilter) {
        return item.choose === areaFilter && item.kind === chooseFilter;
      } else if (creditFilter) {
        return item.credit === creditFilter;
      } else if (areaFilter) {
        return item.choose === areaFilter;
      } else if (chooseFilter) {
        return item.kind === chooseFilter;
      } else {
        return true;
      }
    });

    // 정렬 기준에 따라 데이터 정렬
    if (sortBy === 1) { // 오름차순
      filteredData.sort((a, b) => a.courses - b.courses);
    } else if (sortBy === 2) { // 내림차순
      filteredData.sort((a, b) => b.courses - a.courses);
    }

    return filteredData;
  };


// handleReset 함수들을 통해 각 필터 초기화 하는 기능 구현
const handleResetCredit = () => {
  setCreditFilter(null);
};

const handleResetArea = () => {
  setAreaFilter(null);
};

const handleResetChoose = () => {
  setChooseFilter(null);
};

const handleResetSort = () => {
  setSortBy(0);
};


  return (
    <div className='honey-main-container'> {/* 메인콘텐츠 영역 */}
        <h2 className='honey-title'>교양 추천 게시판</h2>
        <h3 className='honey-exp'>카테고리 별로 원하는 교양을 찾아보세요!</h3>
      <div className='honey-category'> {/*카테고리 버튼용 영역 */}
        <h3 className='honey-category-text'>카테고리</h3>
        {/*드롭다운 버튼 컴포넌트들을 불러와서 각 카테고리 버튼 구현 */}
        <DropdownBtn
          drBtn_title={"학점"} // 버튼에 쓰이는 카테고리 이름
          items={['1학점', '2학점', '3학점']} // 버튼을 눌렀을 때 보이는 리스트 목록
          onSelect={setCreditFilter} // 리스트를 선택하면 해당 필터링 함수 실행되어 선택된 값이 업뎃될 때 상태가 변경되도록 설정
          onReset={handleResetCredit} // 리스트의 초기화 목록을 누르면 해당 필터링 초기화
        />
        <DropdownBtn
          drBtn_title={"선택영역"}
          items={['인성교양', '기초교양', '일반교양', '자유교양', '전공필수', '전공선택']}
          onSelect={setAreaFilter}
          onReset={handleResetArea} 
        />
        <DropdownBtn
          drBtn_title={"이수구분"}
          items={['필수', '선택']}
          onSelect={setChooseFilter}
          onReset={handleResetChoose} 
        />
        <DropdownBtn
          drBtn_title={"수강횟수"}
          items={['적은순', '많은순']}
          onSelect={(item) => setSortBy(item === '적은순' ? 1 : item === '많은순' ? 2 : 0)} // 선택한 리스트 값이 적은순이면 1을 대입하여 오름차순, 많은순이면 2를 대입하여 내림차순
          onReset={handleResetSort}
        />
      </div>
      <div className="horizontal-line"></div> {/*카테고리 영역과 교양 목록 영역을 구분하기 위한 선 추가 용도 */}
      <h2>교양 목록</h2>
      <div className='honey-list'>
        <Honey_list honey_data={applyFilters()} /> {/*Honey_list.js의 컴포넌트를 불러와서 필터링된 데이터값을 넘김 */}
      </div>
    </div>
  );
}

export default HoneyBoard;
