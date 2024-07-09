import React, { useEffect, useState } from 'react';
import '../styles/popup.css';
import api from '../api';
import { useReadLocalStorage } from 'usehooks-ts';
import PieCheck from '../components/Check_Pie'; // PieCheck 컴포넌트를 import

function RecommendationPopup({ isOpen, onClose, details, area }) {
    let remainingCredits = details[1] - details[2];
    if (remainingCredits < 0) {
        remainingCredits = 0;
    }

    const [filteredData, setFilteredData] = useState([]);
    const token = useReadLocalStorage('token');

    useEffect(() => {
        if (isOpen) {
            const fetchData = async () => {
                const [liberalArts, otherSubjects] = await Promise.all([
                    api.liberalArts.find({ token, area }),
                    api.subjects.find({ token, area })
                ]);

                // 두 데이터를 합치고 중복을 제거
                const combinedSubjects = [...liberalArts, ...otherSubjects];
                const uniqueSubjects = Array.from(new Set(combinedSubjects.map(item => item.id))) // id를 기준으로 중복 제거
                    .map(id => {
                        return combinedSubjects.find(item => item.id === id);
                    });

                // details[0] 값과 kind(이수구분)가 일치하는 과목 필터링
                const filteredSubjects = uniqueSubjects.filter(subject => subject.kind === details[0]);
                setFilteredData(filteredSubjects);
            };

            fetchData();
        }
    }, [isOpen, area, token, details]);

    return (
        <div className={isOpen ? "recommendation-popup" : "recommendation-popup hidden"}>
            <div className='popup-top'>
                <h2 className='popup-top-text'>세부 정보</h2>
                <button className='popup-close-btn' onClick={onClose}>x</button>
            </div>
            <div className='popup-content'>
                <div className='popup-info'>
                    <div className='popup-graph'>
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
                <table className='popup-list'>
                    <thead className='popup-list-thead'>
                        <tr>
                            <th className='popup-item'>학수번호</th>
                            <th className='popup-item'>과목명</th>
                            <th className='popup-item'>이수구분</th>
                            <th className='popup-item'>학점</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td className='popup-item'>{item.id}</td>
                                <td className='popup-item'>{item.name}</td>
                                <td className='popup-item'>{item.kind}</td>
                                <td className='popup-item'>{item.credit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecommendationPopup;