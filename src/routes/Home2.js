// Home2.js
import React from 'react';
import { Layout} from 'antd';
import '../styles/Home.css';
import '../components/MenuItems';
import { Link, useNavigate } from "react-router-dom";
import cherry from "../assets/cherry-blossom.jpg"
import { useReadLocalStorage } from 'usehooks-ts'

function Home() {
  const { Content } = Layout;
  const token = useReadLocalStorage('token');
  const navigate = useNavigate();

  const handleCheckClick = () => {
    if (token) {
      navigate("/check");
    } else {
      navigate("/login");
      alert("호서대 졸업요건 사이트는 로그인 후 사용 가능합니다.");
    }
  };

  return (
    <>
      <Layout className='app-layout'>
        <Content className='app-content'>
          <div className="home-image-container">
            <div className="home-big-title">Graduation, the moment</div>
            <div className="home-small-title">Never give up, your dreams will come true</div>
            <img
              src={cherry}
              alt="사진"
              style={{ margin: 'auto', display: 'block', filter: 'brightness(0.92)' }}
            />
            <div className="home-button-container">
              <button className="home-primary-button" onClick={handleCheckClick}>
                검사하기
                </button>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
