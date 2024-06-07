// MyPage.js

import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 임포트
import '../styles/MyPage.css';
import Sidebar from '../components/sidebar';
import LiberalArts from '../components/LiberalArts';
import Major from '../components/Major';
import Activity from '../components/Activity';
import Requirements from '../components/Requirements';
import CourseList from '../components/Courselist';
import api from '../api'; // create 함수 임포트
import { UserContext } from '../context';
import { useReadLocalStorage } from 'usehooks-ts';

function MyPage() {  // userInfo를 props로 받음
  const userInfo = useContext(UserContext)
  const token = useReadLocalStorage('token')
  const fileInputRef = useRef(null); // 파일 입력(input) 엘리먼트의 참조 생성
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [credit, setCredit] = useState(null)

  useEffect(() => {
    api.members.credits(token).then((data) => setCredit(data))
  }, [])

  // 파일 선택 창 열기
  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log('선택한 파일:', file); // 선택한 파일 콘솔에 출력
    // 파일 처리 로직 추가
    if (file) {
      try {
        const response = await api.xlsx.create(file, token);
        console.log('서버 응답:', response);

        // 서버 응답 처리 및 마이페이지 데이터 업데이트 로직 추가
        if (response.success) {
          // 서버에서 받은 데이터를 이용해 교양 학점 정보 업데이트
          // 예: setLiberalArtsData(response.data);
          alert('파일 업로드 성공');
          window.location.reload();
        } else {
          // 에러 처리
          alert(response.message || '파일 업로드 실패');
        }
      } catch (error) {
        console.error('파일 업로드 중 에러 발생:', error);
        alert('파일 업로드 중 에러 발생');
      }
    }
  };
        
  // 새 페이지로 이동하는 함수
  const navigateToCourseSearchPage = () => {
    navigate('/CourseSearchPage'); // CourseSearchPage로 페이지 이동
  };

  return (
    <div className="mypage-LayoutWrapper">
      <div className="mypage-sidebar">
        <Sidebar />
      </div>
      <div className="mypage-ContentWrapper">
        <h1 className="mypage-title">마이페이지</h1>
        <div className="mypage-MainContentWrapper">
          <LiberalArts data={credit} />
          <div className='mypage-Major-Activity'>
            <Major data={credit} />
            <Activity data={credit} />
          </div>
        </div>
        <Requirements />
        <div className="mypage-SubjectList">수강 과목 등록</div>
        <div className="mypage-ButtonContainer">
          {/* 파일 입력(input) 엘리먼트와 버튼 함께 렌더링 */}
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          <button className="mypage-Button" onClick={openFilePicker}>파일 업로드</button>
          {/* 직접 추가 버튼 클릭 시 새 페이지로 이동 */}
          <button className="mypage-Button" onClick={navigateToCourseSearchPage}>직접 추가</button>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export default MyPage;
