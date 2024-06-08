//develop3
import React from 'react';

function Honey_list({ honey_data }) { //HoneyBoard.js의 임시데이터 가져옴
  return (
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
        {honey_data.map(item => ( // 맵 함수로 data 배열의 각 요소 반복하여 테이블의 각 행을 생성
          <tr key={item.id}> {/*각 행에 키값을 부여하여 고유 식별자를 주기 위한 용도. 학수번호를 고유 키값으로 설정함 */}
            <td className='h-item'>{item.id}</td> {/*행 안의 아이템들 순서대로 넣어줌 */}
            <td className='h-item'>{item.name}</td>
            <td className='h-item'>{item.kind}</td>
            <td className='h-item'>{item.choose}</td>
            <td className='h-item'>{item.credit}</td>
            <td className='h-item'>{0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Honey_list;
