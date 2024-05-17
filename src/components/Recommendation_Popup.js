import React, { useEffect } from 'react';
import '../styles/popup.css';
import { honey_data } from './Honey_item';
import PieCheck from '../components/Check_Pie'; // PieCheck 컴포넌트를 import

function RecommendationPopup({ isOpen, onClose, details, filteredData }) {
    let remainingCredits = details[1] - details[2];
    if (remainingCredits < 0) {
        remainingCredits = 0;
    }

    useEffect(() => {
        // 팝업이 열릴 때마다 그래프를 다시 그림
        if (isOpen) {
            // 그래프를 다시 그리는 작업이 필요하다면 이 곳에 작성
        }
    }, [isOpen]); // isOpen이 변경될 때마다 useEffect가 호출되도록 설정

    return (
        <div className={isOpen ? "recommendation-popup" : "recommendation-popup hidden"}>
            <div className='popup-top'>
                <h2>세부 정보</h2>
                <button className='popup-close-btn' onClick={onClose}>x</button>
            </div>
            <div className='popup-content'>
                <div className='popup-info'>
                    <div className='popup-graph'>
                        {/* isOpen이 true일 때에만 그래프를 표시 */}
                        {isOpen && <PieCheck stdCredit={details[1]} preCredit={details[2]} />}
                    </div>
                    <div className='popup-info-text'>
                        <p>선택영역: {details[0]}</p>
                        <p>기준학점: {details[1]}</p>
                        <p>이수학점: {details[2]}</p>
                    </div>
                </div>
                <p>해당 영역을 이수하려면 앞으로 {remainingCredits}학점 남았습니다.</p>
            </div>
            <h3>추천 리스트</h3>
            <div className='popup-list'>
                <table className='h-list'>
                    <thead className='h-list-thead'>
                        <tr>
                            <th className='h-item'>학수번호</th>
                            <th className='h-item'>과목명</th>
                            <th className='h-item'>이수구분</th>
                            <th className='h-item'>선택영역</th>
                            <th className='h-item'>학점</th>
                            <th className='h-item'>수강횟수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td className='h-item'>{item.id}</td>
                                <td className='h-item'>{item.sname}</td>
                                <td className='h-item'>{item.kind}</td>
                                <td className='h-item'>{item.choose}</td>
                                <td className='h-item'>{item.credit}</td>
                                <td className='h-item'>{item.courses}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecommendationPopup;
