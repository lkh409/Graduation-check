import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpg";
import { FiHome } from "react-icons/fi";
import "../styles/sidebar.css";

const Sidebar = ({ userInfo }) => {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempStudentNumber, setTempStudentNumber] = useState("");
  const [tempDepartment, setTempDepartment] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log("Received userInfo:", userInfo);  // userInfo 로그 출력
    if (userInfo) {
      setName(userInfo.name || "");
      setStudentNumber(userInfo.id || "");
      setDepartment(userInfo.department.name|| "");
      setTempName(userInfo.name || "");
      setTempStudentNumber(userInfo.id || "");
      setTempDepartment(userInfo.department.name || "");
    }
  }, [userInfo]);


  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // 모달 닫을 때 임시 상태를 초기 상태로 설정
    setTempName(name);
    setTempStudentNumber(studentNumber);
    setTempDepartment(department);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[0-9]+$/.test(tempStudentNumber)) {
      setIsError(true); 
      return; // 함수 종료
    }
    // 숫자가 입력된 경우 처리하는 로직
  };

  // 숫자만 입력되도록 확인하는 함수
  const handleNumericInput = (e) => {
    const value = e.target.value;
    // 정규 표현식을 사용하여 숫자가 아닌 문자가 입력되면 공백으로 대체
    const numericValue = value.replace(/\D/g, '');
    // 숫자만 입력되도록 상태 업데이트
    setTempStudentNumber(numericValue);
  };

  return (
    <div className="SidebarWrapper">
      <div className="SidebarHeader">
        <img className="ProfileImage" src={profileImage} alt="Profile" />
        <div className="UserInfo">
          <div>{name}</div>
          <div>{studentNumber}</div>
          <div>{department}</div>
          <button className="sidebar-button" onClick={handleEditButtonClick}>정보 수정하기</button>
        </div>
      </div>
      <ul className="SidebarMenu">
        <li className="SidebarMenuItem">
          <a className="ExternalLink" href="https://intranet.hsu.ac.kr/" target="_blank" rel="noopener noreferrer">
            <div className="SidebarIcon"><FiHome /></div>
            호서대 통합정보시스템
          </a>
        </li>
        <li className="SidebarMenuItem">
          <a className="ExternalLink" href="https://learn.hoseo.ac.kr/login/index.php" target="_blank" rel="noopener noreferrer">
            <div className="SidebarIcon"><FiHome /></div>
            호서대 LMS
          </a>
        </li>
        <li className="SidebarMenuItem">
          <a className="ExternalLink" href="https://sso.hoseo.edu/svc/tk/Auth.do?id=NEW_PORTAL&ac=Y&ifa=N" target="_blank" rel="noopener noreferrer">
            <div className="SidebarIcon"><FiHome /></div>
            호서대 포털시스템
          </a>
        </li>
      </ul>
      {isModalOpen && (
        <div className="Side-Modal">
          <div className="Side-ModalContent">
            <span className="Side-CloseModalButton" onClick={handleCloseModal}>×</span>
            <div className="Side-ModalHeaderText">정보 수정하기</div>
            <form onSubmit={handleSubmit}>
              <div className="side-input-wrapper">
                <label className="Side-label">이름:</label>
                {/* 임시 상태를 값으로 설정하고 onChange 이벤트 핸들러를 통해 업데이트 */}
                <input className="side-input" type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} maxLength={4} />
              </div>
              <div className="side-input-wrapper">
                <label className="Side-label">학번:</label>
                <input className="side-input" type="text" value={tempStudentNumber} onChange={handleNumericInput} maxLength={8} />
                {/* 숫자가 아닌 다른 문자 입력 시 안내 메시지 표시 */}
                {!/^\d+$/.test(tempStudentNumber) && <div className="Side-ErrorMessage">숫자만 입력하세요.</div>}
              </div>
              <div className="side-input-wrapper">
                <label className="Side-label">학과:</label>
                <select className="side-input" value={tempDepartment} onChange={(e) => setTempDepartment(e.target.value)}>
                  <option value="컴퓨터공학부">컴퓨터공학부</option>
                  <option value="제약공학과">제약공학과</option>
                  <option value="화장품생명공학부">화장품생명공학부</option>
                  <option value="건강기능식품학과">건강기능식품학과</option>
                  <option value="글로벌통상학과">글로벌통상학과</option>
                  <option value="영어영문학과">영어영문학과</option>
                </select>
              </div>
              <div className="side-button-wrapper">
                <button className="side-button" type="submit">저장</button>
                <button className="side-delete-button">회원탈퇴</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;


 










