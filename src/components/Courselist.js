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
      <div>
        <h3 className='Cor-title'>수강과목 리스트</h3>
        <div className="Cor-LineWrapper">
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
          <div className="Cor-Line">
            <span className="Cor-RowText"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;




















