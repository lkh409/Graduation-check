import React from 'react';
import '../styles/popup.css'
import Honey_list from './Honey_list';

function RecommendationPopup({ isOpen, onClose, details }) {
    return (
        <div className={isOpen ? "recommendation-popup" : "recommendation-popup hidden"}>
            <button className='popup-close-btn' onClick={onClose}>x</button>
            <h2>세부 정보</h2>
            <div className='popup-content'>
                <div className='popup-graph'>
                    {details[3]}
                </div>
                <div className='popup-info'>
                        <p>선택영역 : {details[0]}</p>
                        <p>기준학점 : {details[1]}</p>
                        <p>이수학점 : {details[2]}</p>
                </div>
            </div>
            <div className='popup-list'>
                
            </div>
        </div>
    );
}

export default RecommendationPopup;