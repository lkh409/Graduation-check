import React from 'react';
import '../styles/popup.css'
import { honey_data } from './Honey_item';

function RecommendationPopup({ isOpen, onClose, details, filteredData }) {

    const remainingCredits = details[1] - details[2];

    return (
        <div className={isOpen ? "recommendation-popup" : "recommendation-popup hidden"}>
            <div className='popup-top'>
            <h2>세부 정보</h2>
            <button className='popup-close-btn' onClick={onClose}>x</button>
            </div>
            <div className='popup-content'>
                <div className='popup-info'>
                    <div className='popup-graph'>
                        {details[3]}
                    </div>
                    <div className='popup-info-text'>
                            <p>선택영역 : {details[0]}</p>
                            <p>기준학점 : {details[1]}</p>
                            <p>이수학점 : {details[2]}</p>
                    </div>
                </div>
                <p>해당 영역을 이수하려면 앞으로 {remainingCredits}학점 남았습니다.</p>
            </div>
            
            <h3>추천 리스트</h3>
            <div className='popup-list'>
                <table className='h-list'> {/*테이블 영역 */}
                    <thead className='h-list-thead'> {/*테이블 안의 헤드 영역 */}
                        <tr> {/*헤드의 행 영역 */}
                        <th className='h-item'>학수번호</th> {/*헤드 행 안의 각 영역들 */}
                        <th className='h-item'>과목명</th>
                        <th className='h-item'>이수구분</th>
                        <th className='h-item'>선택영역</th>
                        <th className='h-item'>학점</th>
                        <th className='h-item'>수강횟수</th>
                        </tr>
                    </thead>
                    <tbody> {/*테이블 안의 바디 영역 */}
                        {filteredData.map(item => ( // 맵 함수로 data 배열의 각 요소 반복하여 테이블의 각 행을 생성
                        <tr key={item.id}> {/*각 행에 키값을 부여하여 고유 식별자를 주기 위한 용도. 학수번호를 고유 키값으로 설정함 */}
                            <td className='h-item'>{item.id}</td> {/*행 안의 아이템들 순서대로 넣어줌 */}
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