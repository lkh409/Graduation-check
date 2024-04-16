// Home2.js
import React from 'react';
import { Layout, Button } from 'antd';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter를 import 하지 않습니다.
import '../styles/App3.css';
import '../components/MenuItems';
import { Link } from "react-router-dom";

function Home() {
  const { Content } = Layout;

  return (
    <>
      <Layout className='app-layout'>
        <Content className='app-content'>
          <div className="home-image-container">
            <div className="home-big-title">Graduation, the moment</div>
            <div className="home-small-title">Never give up, your dreams will come true</div>
            <img
              src="https://cdn.pixabay.com/photo/2019/02/07/11/22/learn-3980941_1280.jpg"
              alt="사진"
              style={{ margin: 'auto', display: 'block' }}
            />
            <div className="home-button-container">
              <Button className="home-primary-button">
              <Link to={"/check"}>검사하기</Link>
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
