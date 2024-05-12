import React, { useState } from "react";
import Navbar from "../components/Navbar2";
import user_icon from "../assets/user_icon.png";
import student_icon from "../assets/student_icon.png";
import email_icon from "../assets/email_icon.png"; // 이메일 아이콘 이미지
import password_icon from "../assets/password_icon.png"; // 비밀번호 아이콘 이미지
import major_icon from "../assets/major_icon.png";
import DropdownBtn from "../components/Dropdown_btn";
import "../styles/SignupStyles.css";
import "../styles/Signup_dropbtn.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [major, setMajor] = useState(""); // 선택된 학과

  const [emailMsg, setEmailMsg] = useState("");
  const [studentIdMsg, setStudentIdMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
  const [majorMsg, setMajorMsg] = useState(""); // 학과 선택 여부 메시지

  const [isEmailCheck, setIsEmailCheck] = useState(false); // 중복 검사를 했는지 안했는지
  const [isEmailAvailable, setIsEmailAvailable] = useState(false); // 아이디 사용 가능한지 아닌지

  //const handleSelect = (selectedItem) => {
  //console.log("Selected item:", selectedItem);
  //};

  const handleReset = () => {
    console.log("Dropdown reset");
  };

  const onChangeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };

  const onChangeStudentIdHandler = (e) => {
    const studentId = e.target.value;
    setStudentId(studentId);
    studentIdCheckHandler(studentId); // 학번 유효성 확인 함수 호출
  };

  const onChangePwdHandler = (e) => {
    const { name, value } = e.target;
    if (name === "pwd") {
      setPwd(value);
      pwdCheckHandler(value, confirmPwd);
    } else {
      setConfirmPwd(value);
      pwdCheckHandler(pwd, value);
    }
  };

  const handleSelect = (selectedItem) => {
    console.log("Selected item:", selectedItem);
    setMajor(selectedItem); // 선택된 학과 저장
    setMajorMsg(""); // 메시지 초기화
  };

  const handleSubmit = () => {
    if (!major) {
      setMajorMsg("학과를 선택해주세요.");
      return;
    }
    // 이후 회원가입 처리 등을 수행할 수 있습니다.
  };

  const emailCheckHandler = async (email) => {
    //이메일 유효성 검사 Handler 구현
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      setEmailMsg("이메일을 입력해주세요.");
      setIsEmailAvailable(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailMsg("유효한 이메일 형식을 입력해주세요.");
      setIsEmailAvailable(false);
      return false;
    }
    setEmailMsg("");
    setIsEmailAvailable(true);
    return true;
  };

  const studentIdCheckHandler = (studentId) => {
    // 학번 유효성 검사 Handler 구현
    const studentIdRegex = /^\d{8}$/; // 8자리의 숫자인지 확인하는 정규식

    if (studentId === "") {
      setStudentIdMsg("학번을 입력해주세요.");
      return false;
    } else if (!studentIdRegex.test(studentId)) {
      setStudentIdMsg("학번은 8자리의 숫자로 입력해주세요.");
      return false;
    } else {
      setStudentIdMsg("");
      return true;
    }
  };

  const pwdCheckHandler = (pwd, confirmPwd) => {
    //비밀번호 유효성 검사 Handler 구현
    const pwdRegex = /^[a-z\d!@*&-_]{8,16}$/;
    if (pwd === "") {
      setPwdMsg("비밀번호를 입력해주세요.");
      return false;
    } else if (!pwdRegex.test(pwd)) {
      setPwdMsg(
        "비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다."
      );
      return false;
    } else if (confirmPwd !== pwd) {
      setPwdMsg("");
      setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setPwdMsg("");
      setConfirmPwdMsg("");
      return true;
    }
  };

  return (
    <>
      <div className="SignupContainer">
        <div className="SingnupTextHeader">
          <div className="SingupText">회원가입</div>
        </div>

        <div className="s_InputWrapper">
          <div className="s_InputContainer">
            <div className="s_input">
              <img src={user_icon} alt="" className="icon" />
              <input
                type="text"
                placeholder="이메일"
                onChange={onChangeEmailHandler}
              />
            </div>
            {emailMsg && (
              <p className={emailMsg ? "s_message" : ""}>{emailMsg}</p>
            )}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={user_icon} alt="" className="icon" />
              <input
                type="text"
                placeholder="학번"
                maxLength={8}
                onChange={onChangeStudentIdHandler}
              />
            </div>
            {studentIdMsg && <p className="s_message">{studentIdMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={password_icon} alt="" className="icon" />
              <input
                type="password"
                id="pwd"
                name="pwd"
                value={pwd}
                placeholder="비밀번호"
                maxLength={16}
                onChange={onChangePwdHandler}
              />
            </div>
            {pwdMsg && <p className="s_message">{pwdMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={password_icon} alt="" className="icon" />
              <input
                type="password"
                id="confirmPwd"
                name="confirmPwd"
                value={confirmPwd}
                placeholder="비밀번호 확인"
                maxLength={16}
                onChange={onChangePwdHandler}
              />
            </div>
            {confirmPwdMsg && <p className="s_message">{confirmPwdMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
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
            {majorMsg && <p className="s_message">{majorMsg}</p>}
          </div>
          <div className="s_submit-container">
            <button className="s_submit" onClick={handleSubmit}>
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
