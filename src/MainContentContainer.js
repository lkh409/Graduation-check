import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home3 from './Home3';
import Notice3 from './Notice3';
import Logout3 from './Logout3';

function MainContentContainer3() { //메인 부분 영역 설정
  return (
    <div className="main-content-container">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home3 />} />
          <Route path="/notice" element={<Notice3 />} />
          <Route path="/logout" element={<Logout3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainContentContainer3;
