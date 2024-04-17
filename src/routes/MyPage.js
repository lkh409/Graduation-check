import React from 'react';
import '../styles/MyPage.css';
import Sidebar from '../components/sidebar';
import LiberalArts from '../components/LiberalArts';
import Major from '../components/Major';
import Activity from '../components/Activity';
import Requirements from '../components/Requirements'; 
import CourseList from '../components/Courselist'; 

function MyPage(){
    return (
        <div className="mypage-LayoutWrapper">
          <div className="mypage-sidebar">
            <Sidebar />
          </div>
          <div className="mypage-ContentWrapper">
          <h1 className="mypage-title">마이페이지</h1>
            <div className="mypage-MainContentWrapper">
              <LiberalArts />
              <div className='mypage-Major-Activity'>
                <Major />
                <Activity />
              </div>
            </div>
            <Requirements />
            <div className="mypage-SubjectList">수강 과목 등록</div>
            <div className="mypage-ButtonContainer">
              <button className="mypage-Button">파일 업로드</button>
              <button className="mypage-Button">직접 추가</button>
            </div>
            <CourseList /> 
          </div>
        </div>
      );
};

export default MyPage;