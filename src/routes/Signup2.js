import React, { useState } from "react";
import Navbar from "../components/Navbar2";
import user_icon from "../assets/user_icon.png";
import student_icon from "../assets/student_icon.png";
import email_icon from "../assets/email_icon.png"; // 이메일 아이콘 이미지
import password_icon from "../assets/password_icon.png"; // 비밀번호 아이콘 이미지
import major_icon from "../assets/major_icon.png";
import DropdownBtn from "../components/Dropdown_btn";
import "../styles/SignupStyles.css";
import '../styles/Signup_dropbtn.css';

function Signup() {
  const [action, setAction] = useState("회원가입");
  const [step, setStep] = useState(1); // 폼 단계 상태 추가
  const [agreeTerms, setAgreeTerms] = useState(false); // 이용약관 동의 상태 추가

  const handleSelect = (selectedItem) => {
    console.log("Selected item:", selectedItem);
  };

  const handleReset = () => {
    console.log("Dropdown reset");
  };

  const handleNext = () => {
    setStep(step + 1); // "다음" 버튼을 클릭할 때 단계 증가
  };

  const handleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
        </div>

        {!agreeTerms && (
          <div className="terms">
            {/* 이용약관 동의 여부를 체크박스로 받음 */}
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={handleAgreeTerms}
              />
              이용약관에 동의합니다.
            </label>
          </div>
        )}

        {agreeTerms && (
          <>
            {step === 1 && (
              <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="" className="icon" />
                  <input type="text" placeholder="아이디" />
                </div>
                <div className="input">
                  <img src={student_icon} alt="" className="icon" />
                  <input type="tel" placeholder="학번" />
                </div>
                <div className="input">
                  <img src={major_icon} alt="" className="icon" />
                  <DropdownBtn
                  drBtn_title={"학과"}
                  items={[
                    "인문사회대학",
                    "경영대학",
                    "생명보건대학",
                    "공과대학",
                    "AI융합대학",
                    "예체능대학",
                    "미래융합대학",
                  ]}
                  type={"signup"}
                  onSelect={handleSelect}
                  onReset={handleReset}
                />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="inputs">
                <div className="input">
                  <img src={email_icon} alt="" className="icon" />
                  <input type="email" placeholder="이메일" />
                </div>
                <div className="input">
                  <img src={password_icon} alt="" className="icon" />
                  <input type="password" placeholder="비밀번호" />
                </div>
                <div className="input">
                  <img src={password_icon} alt="" className="icon" />
                  <input type="password" placeholder="비밀번호 확인" />
                </div>
              </div>
            )}

            <div className="s_submit-container">
              <button className="s_submit" onClick={handleNext}>
                {step === 1 ? "다음" : "제출"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Signup;
