import React from 'react';

function Honey_list({ data }) {
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

export default Honey_list;
