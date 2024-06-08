import Navbar from "../components/Navbar2";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import user_icon from "../assets/user_icon.png";
import password_icon from "../assets/password_icon.png";
import "../styles/LoginStyles.css";
import api from '../api'
import { useLocalStorage } from 'usehooks-ts'


function Login({ setIsAuthenticated, setUserInfo }) { // props로 로그인 상태, 사용자 정보 업데이트 함수 받음
  const [loginOptions, setLoginOptions] = useState({ id: '', password: '' });
  const [_, setToken, __] = useLocalStorage('token')
  
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    try {
      const response = await api.auth.login(loginOptions);
      if (response.status === 200) {
        setIsAuthenticated(true); // 로그인 성공 시 상태 업데이트
        console.log(response)
        setToken(response.token)
        alert('로그인 성공');

        const userInfoResponse = await api.members.me(response.token); // 사용자 정보 호출
        if (userInfoResponse.status === 200) {
          setUserInfo(userInfoResponse.member);
          navigate('/mypage'); // 마이 페이지로 리디렉션
          window.location.reload(); // 정보 수정 후 새로고침
        }
      } else if (response.status === 401) {
        alert('아이디 또는 비밀번호가 틀렸습니다');
        setLoginOptions({ id: '', password: '' });
      }
    } catch (error) {
      console.error('로그인 중 오류가 발생했습니다', error);
    }
  };

  // 아이디 입력 값이 숫자인지 확인하고 상태 업데이트(NaN 방지)
  const handleIdChange = (e) => {
    const value = e.target.value;
    const parsedValue = Number.parseInt(value);
    if (!isNaN(parsedValue)) {
      setLoginOptions({ ...loginOptions, id: parsedValue });
    } else {
      setLoginOptions({ ...loginOptions, id: '' });
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

        <form className="l_InputContainer" onSubmit={handleLogin}>
          <div className="l_input">
            <img src={user_icon} alt="" className="l_icon" />
            <input
              type="text"
              inputMode="numeric"
              placeholder="아이디"
              maxLength={8}
              value={loginOptions.id}
              onChange={handleIdChange} // 아이디 입력 변경 시 handleIdChange 호출
              required
              autoComplete="username"
            />
          </div>

          <div className="l_input">
            <img src={password_icon} alt="" className="l_icon" />
            <input
              type="password"
              placeholder="비밀번호"
              minLength={8}
              maxLength={16}
              value={loginOptions.password}
              onChange={(e) => setLoginOptions({ ...loginOptions, password: e.target.value })}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="l_submit-container">
            <button className="l_submit" type="submit">
              로그인
            </button>
          </div>
        </form>

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
