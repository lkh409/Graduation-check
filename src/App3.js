import React,  { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App3.css";
import Check_page from "./routes/Check_page3";
import "./styles/Check_page.css";
import Navbar from "./components/Navbar2";
import Footer from "./components/Footer";
import Home from "./routes/Home2";
import HoneyBoard from "./routes/HoneyBoard";
import Login from "./routes/Login2";
import Signup from "./routes/Signup2";
import MyPage from "./routes/MyPage";
import FindPwd from "./routes/FindPwd";
import CourseSearchPage from "./components/SearchPage";
import api from './api'

function App3() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 추가

  useEffect(() => {
    const fetchUserInfo = async (token) => {
      try {
        const response = await api.members.me(token);
        console.log("API response:", response); // API 응답 전체 출력
        if (response.status === 200) {
          console.log("User info:", response); // User info 로그 출력
          setUserInfo(response); // 사용자 정보를 올바르게 설정
          setIsAuthenticated(true);
        } else {
          console.error("Failed to fetch user info:", response);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token); 
    if (token) {
      fetchUserInfo(token);
    }
  }, [isAuthenticated]);

  const handleLogout = () => { // 로그아웃 처리
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserInfo(null);
  };

  return (
    <div className="app-container">
      <Router>
      <Navbar isLoggedIn={isAuthenticated} toggleLogin={handleLogout} userInfo={userInfo} />
        <div>
          <Routes>
            {" "}
            {/*각 컴포넌트 페이지들 경로 설정. 네비게이션 바와 푸터 중간 메인 콘텐츠 부분에 띄워짐 */}
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<Check_page />} />{" "}
            {/*검사하기는 메뉴에 없지만 편의상 코드를 짜면서 확인하기 편하도록 임시로 추가해놓음 */}
            <Route path="/honeyboard" element={<HoneyBoard />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserInfo={setUserInfo} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={isAuthenticated ? <MyPage userInfo={userInfo} /> : <Navigate to="/login" />} />
            <Route path="/findPwd" element={<FindPwd />} />
            <Route path="/CourseSearchPage" element={<CourseSearchPage />} />
          </Routes>
        </div>
        <Footer />
        {/*하단의 푸터 */}
      </Router>
    </div>
  );
}

export default App3;
