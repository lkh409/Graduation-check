//develop3
import React from 'react';
import MainContentContainer3 from '../components/MainContentContainer';
import '../styles/App3.css'
import '../styles/Check_page.css'

function Check_page() {
  return (
    <>
      <h2 className='success-check'>졸업요건 검사 완료!</h2>
      <p>추천하기를 클릭하면 세부 정보를 확인할 수 있습니다.</p>
      <div className="content-container"> {/*위의 제목과 텍스트들을 제외한 주요 콘텐츠 영역 */}
        {/*MainContentContainer3 컴포넌트를 불러와서 차트를 띄움. title값으로 원하는 과목구분 이름을 기입*/}
        <MainContentContainer3 title="인성교양"/>
        <MainContentContainer3 title="기초교양"/>
        <MainContentContainer3 title="일반교양"/>
        <MainContentContainer3 title="자유교양"/>
        <MainContentContainer3 title="전공필수"/>
        <MainContentContainer3 title="전공선택"/>
      </div>
    </>
  );
}

export default Check_page;
