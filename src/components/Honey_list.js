import React from 'react';

class Honey_list extends React.Component {
  render() {
    // 예시 데이터
    const data = [
      { id: 1, sname: '과목 1', kind: '필수', choose: '일반교양', credit: '2', courses: '190' },
      { id: 2, sname: '과목 2', kind: '선택', choose: '자유교양', credit: '2', courses: '158' },
      { id: 3, sname: '과목 3', kind: '선택', choose: '전공선택', credit: '3', courses: '123' },
      { id: 4, sname: '과목 4', kind: '선택', choose: '일반교양', credit: '2', courses: '110' },
      { id: 5, sname: '과목 5', kind: '필수', choose: '자유교양', credit: '3', courses: '97' },
      { id: 6, sname: '과목 6', kind: '선택', choose: '자유교양', credit: '2', courses: '90' },
      { id: 7, sname: '과목 7', kind: '필수', choose: '일반교양', credit: '2', courses: '89' },
      { id: 8, sname: '과목 8', kind: '필수', choose: '일반교양', credit: '2', courses: '82' },
      { id: 9, sname: '과목 9', kind: '선택', choose: '자유교양', credit: '3', courses: '60' },
      { id: 10, sname: '과목 10', kind: '선택', choose: '일반교양', credit: '2', courses: '46' },
      { id: 11, sname: '과목 11', kind: '필수', choose: '전공선택', credit: '3', courses: '31' },
      { id: 12, sname: '과목 12', kind: '선택', choose: '전공선택', credit: '2', courses: '10' },
    ];

    return (
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
          {data.map(item => (
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
    );
  }
}

export default Honey_list;
