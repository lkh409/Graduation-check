import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 className="home-title">메인 홈화면</h1>
      <div className="horizontal-line"></div>
      <div className='home-content'>
      <button>
        <Link to="/check" className='chk-btn'>검사하기</Link>
        </button>
    </div>
    </>
  );
}

export default Home;
