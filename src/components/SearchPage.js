import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/SearchPage.css';

function CourseSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    id: '',
    sname: '',
    kind: '',
    choose: '',
    credit: ''
  });

  const courseData = [
    { id: 'CS101', sname: 'Introduction to Computer Science', kind: 'Core', choose: 'Mandatory', credit: 3 },
    { id: 'CS102', sname: 'Data Structures', kind: 'Core', choose: 'Mandatory', credit: 3 },
    { id: 'CS103', sname: 'Algorithms', kind: 'Core', choose: 'Elective', credit: 3 },
    { id: 'CS104', sname: 'Operating Systems', kind: 'Core', choose: 'Elective', credit: 3 },
    // ... 더 많은 과목 데이터
  ];

  const handleSearch = () => {
    const results = courseData.filter(item => 
      item.id.toLowerCase().includes(searchText.toLowerCase()) || 
      item.sname.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(results);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCourse = () => {
    setFilteredData([...filteredData, newCourse]);
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleCourseClick = (course) => {
    window.confirm("추가하시겠습니까?");
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
              <th className='s-item'>추가</th>
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
                  <td className='s-item'>
                    <button onClick={() => handleCourseClick(item)}>추가</button>
                  </td>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        contentLabel="과목 추가"
      >
        <h2>과목 추가</h2>
        <form>
          <label>
            학수번호:
            <input type="text" name="id" value={newCourse.id} onChange={handleInputChange} />
          </label>
          <label>
            과목명:
            <input type="text" name="sname" value={newCourse.sname} onChange={handleInputChange} />
          </label>
          <label>
            이수구분:
            <input type="text" name="kind" value={newCourse.kind} onChange={handleInputChange} />
          </label>
          <label>
            선택영역:
            <input type="text" name="choose" value={newCourse.choose} onChange={handleInputChange} />
          </label>
          <label>
            학점:
            <input type="text" name="credit" value={newCourse.credit} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleAddCourse}>추가하기</button>
        </form>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
}

export default CourseSearchPage;








