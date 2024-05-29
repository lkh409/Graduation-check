// MyPage.js

import React, { useRef } from 'react';
import '../styles/MyPage.css';
import Sidebar from '../components/sidebar';
import LiberalArts from '../components/LiberalArts';
import Major from '../components/Major';
import Activity from '../components/Activity';
import Requirements from '../components/Requirements';
import CourseList from '../components/Courselist';
import CourseSearchPage from '../components/SearchPage';

function MyPage({ userInfo }) {  // userInfo를 props로 받음
  const fileInputRef = useRef(null); // 파일 입력(input) 엘리먼트의 참조 생성

  // 파일 선택 창 열기
  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('선택한 파일:', file); // 선택한 파일 콘솔에 출력
    // 파일 처리 로직 추가
  };

  // 새 창 열기 함수
  const openNewWindow = () => {
    window.open('/CourseSearchPage', '_blank'); // CourseSearchPage를 새 창에서 열기
  };

  return (
    <div className="mypage-LayoutWrapper">
      <div className="mypage-sidebar">
        <Sidebar userInfo={userInfo}/>
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
          {/* 파일 입력(input) 엘리먼트와 버튼 함께 렌더링 */}
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          <button className="mypage-Button" onClick={openFilePicker}>파일 업로드</button>
          {/* 직접 추가 버튼 클릭 시 새 창에서 CourseSearchPage 열기 */}
          <button className="mypage-Button" onClick={openNewWindow}>직접 추가</button>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export default MyPage;






























