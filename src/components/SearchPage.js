import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../styles/SearchPage.css';
import { useReadLocalStorage } from 'usehooks-ts';
import api from '../api';

function CourseSearchPage() {
  const token = useReadLocalStorage('token')

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.subjects.find({ token }).then((subjects) => setSubjects(subjects))
  }, [])

  const handleSearch = () => {
    const results = subjects.filter(item => 
      item.id.toLowerCase().includes(searchText.toLowerCase()) || 
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(results);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCourse(null)
  };

  const handleAddCourse = () => {
    setFilteredData([...filteredData]);
    closeModal();
  };

  const handleCourseClick = (course) => {
    setIsModalOpen(true)

    setCourse(course)
  };

  const onSubmit = (e) => {
    e.preventDefault()

    api.members.addSubject({
      subjectId: course.id,
      year: course.year,
      semester: course.semester,
      credit: course.credit,
      grade: course.grade
    }, token).then((response) => {
      if (response.status <= 300) {
        return alert('성공적으로 추가하였습니다')
      }

      alert('오류')
    })
  }

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
            {filteredData.length > 0 && (
              filteredData.map(item => (
                <tr key={item.id}>
                  <td className='s-item'>{item.id}</td>
                  <td className='s-item'>{item.name}</td>
                  <td className='s-item'>{item.kind}</td>
                  <td className='s-item'>{item.choose}</td>
                  <td className='s-item'>{item.credit}</td>
                  <td className='s-item'>
                    <button onClick={() => handleCourseClick(item)}>추가</button>
                  </td>
                </tr>
              ))
            )}
            {filteredData.length <= 0 && subjects.length > 0 ? (
              subjects.map(item => (
                <tr key={item.id}>
                  <td className='s-item'>{item.id}</td>
                  <td className='s-item'>{item.name}</td>
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
        {course && (<form onSubmit={onSubmit}>
          <label>
            학수번호:
            <input type="text" name="id" value={course.id} disabled={true} />
          </label>
          <label>
            과목명:
            <input type="text" name="name" value={course.name} disabled={true} />
          </label>
          <label>
            이수구분:
            <input type="text" name="kind" value={course.kind}  disabled={true} />
          </label>
          <label>
            선택영역:
            <input type="text" name="choose" value={course.choose} disabled={true}/>
          </label>
          <label>
            학점:
            <input type="number" name="credit" value={course.credit} onChange={(e) => setCourse((c) => ({ ...c, credit: e.target.valueAsNumber }))} required={true} />
          </label>
          <label>
            년도:
            <input type="number" name="year" onChange={(e) => setCourse((c) => ({ ...c, year: e.target.valueAsNumber }))} required={true} />
          </label>
          <label>
            학기:
            <input type="number" name="semester" onChange={(e) => setCourse((c) => ({ ...c, semester: e.target.valueAsNumber }))} required={true} />
          </label>
          <label>
            성적:
            <input type="text" name="grade" onChange={(e) => setCourse((c) => ({ ...c, grade: e.target.value }))} required={true}  />
          </label>
          <button type="submit">추가하기</button>
        </form>)}
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
}

export default CourseSearchPage;