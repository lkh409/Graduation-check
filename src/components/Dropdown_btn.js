//develop3
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Dropdown_btn.css';


function DropdownBtn({ drBtn_title, items, onSelect, onReset, type }) { // 버튼 이름, 버튼 안 리스트 목록 배열, 값 선택 함수, 초기화 함수, 클래스이름 설정
  // useState를 통해 컴포넌트의 상태를 관리
  const [isOpen, setIsOpen] = useState(false); // 드롭다운이 열려있는지 여부를 나타냄
  const [selectedItem, setSelectedItem] = useState(null); // 사용자가 선택한 리스트의 아이템 값을 저장
  const [arrowDirection, setArrowDirection] = useState('∨'); // 드롭다운 버튼 누를 때마다 화살표 방향이 바뀌도록 설정
  const [isButtonSelected, setIsButtonSelected] = useState(false); // 드롭다운 버튼 선택 여부
  const dropdownRef = useRef(null);

  useEffect(() => { // 컴포넌트가 마운트될 때 이벤트 리스너를 추가하고 언마운트될 때 이를 제거하는 역할
    const handleClickOutside = (event) => { // 드롭다운이 열린 상태에서 외부를 클릭하면 드롭다운을 닫을 수 있도록 설정
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setArrowDirection('∨');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => { // 드롭다운을 열거나 닫는 함수
    setIsOpen(!isOpen);
    setArrowDirection(isOpen ? '∨' : '∧');
  };

  const handleItemClick = (item) => { // 드롭다운 아이템 클릭하면 호출되는 함수
    setSelectedItem(item); // 선택된 아이템을 selectedItem 상태에 설정
    onSelect(item); // 선택된 값을 상위 컴포넌트(HoneyBoard.js)로 전달
    setIsOpen(false); // 드롭다운 닫음
    setArrowDirection('∨'); // 화살표 방향 아래로 변경
    setIsButtonSelected(true); // 드롭다운 버튼이 선택되었음을 나타내는 상태를 설정
  };

  const handleReset = () => { // 초기화 버튼을 클릭하면 호출되는 함수
    onReset(); // 초기화 동작을 상위 컴포넌트(HoneyBoard.js)로 전달
    setSelectedItem(null); // 선택된 아이템을 null로 설정
    setIsOpen(false); // 드롭다운 닫음
    setArrowDirection('∨'); // 화살표 아래
    setIsButtonSelected(false); // 선택 상태 초기화
  };

  return (
    // 조건에 따라 클래스명이 다르게 주어지도록 다중 클래스명으로 설정. 타입이 signup일 땐 회원가입 화면에 있는 드롭다운 버튼에 적용되도록 설정함
    <div className={`dropdown${isOpen ? ' open' : ''} ${type === 'signup' ? 'signup-dropdown' : ''}`} ref={dropdownRef}>
      <button
        className={`dropdown-toggle${isOpen ? ' active' : ''}${isButtonSelected ? ' selected' : ''}  ${type === 'signup' ? 'signup-dropdown-toggle' : ''}`}
        onClick={toggleDropdown}
      >
        <span>{selectedItem || drBtn_title}</span> {/*선택된 아이템이 있으면 그 값을 버튼에 표시, 아니면 기본 버튼 이름 표시 */}
        <span className='empty'> </span> {/*빈 공간 주기 위한 용도 */}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>{arrowDirection}</span> {/*화살표 방향에 따라 스타일 적용 */}
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${type === 'signup' ? 'signup-dropdown-menu' : ''}`}>
          {items.map((item, index) => ( // 드롭다운 메뉴 아이템들을 렌더링
            <div
              key={index}
              className={`dropdown-item ${type === 'signup' ? 'signup-dropdown-item' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
          {/*초기화도 목록에 나타나도록 렌더링 */}
          <div className={`dropdown-item reset ${type === 'signup' ? 'signup-dropdown-item reset' : ''}`} onClick={handleReset}>
            초기화
          </div>
        </div>
      )}
    </div>
  );
  
}

export default DropdownBtn;
