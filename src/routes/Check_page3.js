import React from 'react';
import MainContentContainer3 from '../components/MainContentContainer';
import GraduationCheck from '../components/GraduationCheck'; // GraduationCheck 컴포넌트를 불러옴
import '../styles/App3.css';
import '../styles/Check_page.css';

function Check_page() {
  return (
    <>
      <h2 className='success-check'>졸업요건 검사 완료!</h2>
      <div className='check-chart-bar'>
        {/* GraduationCheck 컴포넌트를 렌더링 */}
        <GraduationCheck />
      </div>
      <p className='check-info-text'>추천하기 버튼을 누르면 각 영역의 세부 정보를 확인할 수 있습니다.</p>
      <div className="content-container">
        <MainContentContainer3 title="인성교양" stdcredit={7} precredit={7}/>
        <MainContentContainer3 title="기초교양" stdcredit={14} precredit={10}/>
        <MainContentContainer3 title="일반교양" stdcredit={18} precredit={24}/>
        <MainContentContainer3 title="자유교양" stdcredit={24} precredit={10}/>
        <MainContentContainer3 title="전공필수" stdcredit={14} precredit={6}/>
        <MainContentContainer3 title="전공선택" stdcredit={50} precredit={12}/>
      </div>
    </>
  );
}

export default Check_page;
