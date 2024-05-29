import React, { useState } from 'react';
import '../styles/SearchPage.css';

function CourseSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const courseData = [
    { id: 'CS101', sname: 'Introduction to Computer Science', kind: 'Core', choose: 'Mandatory', credit: 3, courses: 2 },
    { id: 'CS102', sname: 'Data Structures', kind: 'Core', choose: 'Mandatory', credit: 4, courses: 1 },
    { id: 'CS103', sname: 'Algorithms', kind: 'Core', choose: 'Elective', credit: 3, courses: 1 },
    { id: 'CS104', sname: 'Operating Systems', kind: 'Core', choose: 'Elective', credit: 3, courses: 1 },
    { id: 'CS105', sname: 'Introduction to Computer Science', kind: 'Core', choose: 'Mandatory', credit: 3, courses: 2 },
    { id: 'CS106', sname: 'Data Structures', kind: 'Core', choose: 'Mandatory', credit: 4, courses: 1 },
    { id: 'CS107', sname: 'Algorithms', kind: 'Core', choose: 'Elective', credit: 3, courses: 1 },
    { id: 'CS108', sname: 'Operating Systems', kind: 'Core', choose: 'Elective', credit: 3, courses: 1 },
    { id: 'CS109', sname: 'Introduction to Computer Science', kind: 'Core', choose: 'Mandatory', credit: 3, courses: 2 },
    { id: 'CS110', sname: 'Data Structures', kind: 'Core', choose: 'Mandatory', credit: 4, courses: 1 },
    { id: 'CS111', sname: 'Algorithms', kind: 'Core', choose: 'Elective', credit: 3, courses: 1 },
    { id: 'CS112', sname: 'Operating Systems', kind: 'Core', choose: 'Elective', credit: 3, courses: 1 },
  ];

  const handleSearch = () => {
    const results = courseData.filter(item => 
      item.id.toLowerCase().includes(searchText.toLowerCase()) || 
      item.sname.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <>
      <div>
        <h2>학수 번호 검색</h2>
        <input 
          className="SearchInput"
          type="text" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          placeholder="학수 번호를 입력하세요" 
        />
        <button className='Search-button' onClick={handleSearch}>검색</button>
      </div>
      <div className='SearchList'>
        <table className='s-list'>
          <thead className='s-list-thead'>
            <tr>
              <th className='s-item'>학수번호</th>
              <th className='s-item'>과목명</th>
              <th className='s-item'>이수구분</th>
              <th className='s-item'>선택영역</th>
              <th className='s-item'>학점</th>
              <th className='s-item'>수강횟수</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <tr key={item.id}>
                  <td className='s-item'>{item.id}</td>
                  <td className='s-item'>{item.sname}</td>
                  <td className='s-item'>{item.kind}</td>
                  <td className='s-item'>{item.choose}</td>
                  <td className='s-item'>{item.credit}</td>
                  <td className='s-item'>{item.courses}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className='s-item'>검색 결과가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CourseSearchPage;




