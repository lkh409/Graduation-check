import React, { useEffect, useState } from 'react';
import '../styles/Courselist.css'; // Import CSS file
import { useReadLocalStorage } from 'usehooks-ts';
import api from '../api'

const CourseList = () => {
  const token = useReadLocalStorage('token')
  const [courses, setCourses] = useState([])

  useEffect(() => {
    api.members.subjects(token).then((courses) => setCourses(courses))
  }, [token])

  const deleteCourse = async (course) => {
    const response = await api.members.deleteSubject(course.id, token)

    if (response.ok) {
      setCourses((courses) => courses.filter((c) => c.id !== course.id))
      return alert('성공적으로 교과목을 삭제했습니다')
    } 

    if (response.status === 403) {
      return alert('직접 추가한 교과목만 삭제할 수 있습니다')
    }

    if (response.status === 404) {
      return alert('존재하지 않는 교과목 입니다')
    }

    alert('알 수 없는 오류가 발생했습니다')
  }

  return (
    <div className="Cor-BoxWrapping">
      <h3 className='Cor-title'>수강과목 리스트</h3>
      <table className='Course-list-table'>
        <thead>
          <tr>
            <th className='Course-list-header'>년도</th>
            <th className='Course-list-header'>학기</th>
            <th className='Course-list-header'>학수번호</th>
            <th className='Course-list-header'>과목명</th>
            <th className='Course-list-header'>이수구분</th>
            <th className='Course-list-header'>학점</th>
            <th className='Course-list-header'>삭제</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.year}</td>
              <td>{course.semester}</td>
              <td>{course.subject.id}</td>
              <td>{course.subject.name}</td>
              <td>{course.subject.kind}</td>
              <td>{course.credit}</td>
              <td>{!course.isFromXlsx && <button type="button" onClick={() => deleteCourse(course)}>삭제</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;




















