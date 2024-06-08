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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;




















