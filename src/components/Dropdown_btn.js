import React, { useState, useEffect, useRef } from 'react';
import '../styles/Dropdown_btn.css';


function DropdownBtn({ drBtn_title, items, onSelect, onReset, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [arrowDirection, setArrowDirection] = useState('∨');
  const [isButtonSelected, setIsButtonSelected] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setArrowDirection(isOpen ? '∨' : '∧');
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
    setArrowDirection('∨');
    setIsButtonSelected(true);
  };

  const handleReset = () => {
    onReset();
    setSelectedItem(null);
    setIsOpen(false);
    setArrowDirection('∨');
    setIsButtonSelected(false);
  };

  return (
    <div className={`dropdown${isOpen ? ' open' : ''} ${type === 'signup' ? 'signup-dropdown' : ''}`} ref={dropdownRef}>
      <button
        className={`dropdown-toggle${isOpen ? ' active' : ''}${isButtonSelected ? ' selected' : ''}  ${type === 'signup' ? 'signup-dropdown-toggle' : ''}`}
        onClick={toggleDropdown}
      >
        <span>{selectedItem || drBtn_title}</span>
        <span className='empty'> </span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>{arrowDirection}</span>
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${type === 'signup' ? 'signup-dropdown-menu' : ''}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`dropdown-item ${type === 'signup' ? 'signup-dropdown-item' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
          <div className={`dropdown-item reset ${type === 'signup' ? 'signup-dropdown-item reset' : ''}`} onClick={handleReset}>
            초기화
          </div>
        </div>
      )}
    </div>
  );
  
}

export default DropdownBtn;
