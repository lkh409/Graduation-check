// Home2.js
import React from 'react';
import { Layout, Button } from 'antd';
import '../styles/Home.css';
import '../components/MenuItems';
import { Link } from "react-router-dom";
import cherry from "../assets/cherry-blossom.jpg"

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
              src={cherry}
              alt="사진"
              style={{ margin: 'auto', display: 'block', filter: 'brightness(0.92)' }}
            />
            <div className="home-button-container">
              <Link to={"/check"}>
              <Button className="home-primary-button">
                검사하기
                </Button>
              </Link>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
