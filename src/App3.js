import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App3.css'
import Check_page from './routes/Check_page3';
import './styles/Check_page.css'
import Navbar from './components/Navbar2';
import Footer from './components/Footer';
import Home from './routes/Home2';
import HoneyBoard from './routes/HoneyBoard';
import Login from "./routes/Login2";
import Signup from "./routes/Signup2";
import MyPage from './routes/MyPage';

function App3() {
  return (
    <div className="app-container">
      <Router>
        <Navbar/>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/check" element={<Check_page/>}/> {/*검사하기는 메뉴에 없지만 편의상 코드를 짜면서 확인하기 편하도록 임시로 추가해놓음 */}
        <Route path="/honeyboard" element={<HoneyBoard/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App3;
