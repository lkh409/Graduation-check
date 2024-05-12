import React, { useState } from "react";
import "../styles/FindPwd.css";
import user_icon from "../assets/user_icon.png";

const FindPwd = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);

  const emailCheckHandler = (email) => {
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

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    emailCheckHandler(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailCheckHandler(email)) {
      setMessage(`다음 주소로 인증 메일을 보냈습니다.  ${email}`);
    }
  };

  return (
    <div className="findContainer">
      <div className="findTextHeader">
        <div className="findText">비밀번호 찾기</div>
      </div>
      <div className="f_InputContainer">
        <div className="f_input">
          <input type="text" placeholder="아이디" maxLength={8} />
        </div>
      </div>

      <div className="f_InputContainer">
        <div className="f_input">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {emailMsg && <p className="f_message">{emailMsg}</p>}
        {message && <p className="okayMsg">{message}</p>}
      </div>
      <button className="f_submit" onClick={handleSubmit}>
        인증하기
      </button>
    </div>
  );
};

export default FindPwd;
