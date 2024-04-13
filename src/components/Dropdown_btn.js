import React, { useState, useEffect, useRef } from 'react';
import './Dropdown_btn.css';

function DropdownBtn({ drBtn_title, items, onSelect, onReset }) {
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
    <div className={`dropdown${isOpen ? ' open' : ''}`} ref={dropdownRef}>
      <button
        className={`dropdown-toggle${isOpen ? ' active' : ''}${isButtonSelected ? ' selected' : ''}`}
        onClick={toggleDropdown}
      >
        {selectedItem || drBtn_title} {arrowDirection}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
          <div className="dropdown-item reset" onClick={handleReset}>
            초기화
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownBtn;
