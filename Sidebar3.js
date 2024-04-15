import React from 'react';

function Sidebar3() { /* 사이드바 기능 */
  return (
    <div className="sidebar">
      <div className="user-info">
        {/* 사용자 정보 표시 (예: 이름, 학과 등) */}
        <h2>User Info</h2>
        <img src='user_image.png'/>
        <p>김호서</p>    {/*사용자 이름*/}
        <p>컴퓨터공학부</p>   {/*사용자 학과*/}
      </div>
      <div className='hoseo-site'>
        <a href='https://intranet.hsu.ac.kr/main.jsp' className='site-link'>호서대 통합정보시스템</a><br/>
        <a href='https://learn.hoseo.ac.kr/' className='site-link'>호서대 학습관리시스템(LMS)</a><br/>
        <a href='https://portal.hoseo.edu/p/STUD/' className='site-link'>호서대 포털시스템</a><br/>
      </div>
    </div>
  );
}

export default Sidebar3;
