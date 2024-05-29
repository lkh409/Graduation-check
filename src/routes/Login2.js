import Navbar from "../components/Navbar2";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import user_icon from "../assets/user_icon.png";
import password_icon from "../assets/password_icon.png";
import "../styles/LoginStyles.css";
import api from '../api'

function Login({ setIsAuthenticated, setUserInfo }) { // props로 로그인 상태,사용자 정보 업데이트 함수 받음
  const [loginOptions, setLoginOptions] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await api.auth.login(loginOptions);
    if (response.status === 200) {
      setIsAuthenticated(true); // 로그인 성공 시 상태 업데이트
      localStorage.setItem('token', response.token); // 토큰 저장
      alert('로그인 성공');

      const userInfoResponse = await api.members.me(response.token); // 사용자 정보 호출
      if (userInfoResponse.status === 200) {
        setUserInfo(userInfoResponse.member);
      }

      navigate('/mypage'); // 마이 페이지로 리디렉션
    } else if (response.status === 401) {
      alert('아이디 또는 비밀번호가 틀렸습니다');
      setLoginOptions({});
    }
  };

  return (
    <>
      <Navbar isLoggedIn={false} />{" "}
      {/* Navbar에 isLoggedIn 상태를 props로 전달 */}
      <div className="LoginContainer">
        <div className="LoginTextHeader">
          <div className="LoginText">로그인</div>
        </div>

        <div className="l_InputContainer">
          <div className="l_input">
            <img src={user_icon} alt="" className="l_icon" />
            <input type="text" inputMode="numeric" placeholder="아이디" maxLength={8} onChange={(e) => setLoginOptions((loginOptions) => ({ ...loginOptions, id: Number.parseInt(e.target.value) }))} required/>
          </div>

          <div className="l_input">
            <img src={password_icon} alt="" className="l_icon" />
            <input type="password" placeholder="비밀번호" minLength={8} maxLength={16} onChange={(e) => setLoginOptions((loginOptions) => ({ ...loginOptions, password: e.target.value }))} required/>
          </div>
        </div>

        <div className="l_submit-container">
          <div className="l_submit" onClick={handleLogin} >
            로그인
          </div>{" "}
          {/* 로그인 버튼 클릭 시 handleLogin 함수 호출 */}
        </div>
        <div className="loginOption">
          <div className="go-signup">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span>회원가입</span>
            </Link>
          </div>
          <span className="space"> | </span>
          <div className="findPwd">
            <Link to="/findPwd" style={{ textDecoration: "none" }}>
              <span>비밀번호 찾기</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;