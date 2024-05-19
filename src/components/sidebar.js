import React, { useState } from "react";
import profileImage from "../assets/profile.jpg";
import { FiHome } from "react-icons/fi";
import "../styles/sidebar.css";

const Sidebar = () => {
  // 수정할 정보의 상태 설정
  const [name, setName] = useState("김이름");
  const [studentNumber, setStudentNumber] = useState("123456789");
  const [department, setDepartment] = useState("컴퓨터공학과");
  // 모달 열림 여부를 추적하는 상태 설정
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 정보 수정하기 버튼 클릭 핸들러
  const handleEditButtonClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 정보 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 서버로 수정된 정보 전송
    setIsModalOpen(false); // 모달 닫기
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
          <a className="ExternalLink" href="https://sso.hoseo.edu/svc/tk/Auth.do?id=NEW_PORTAL&ac=Y&ifa=N&" target="_blank" rel="noopener noreferrer">
            <div className="SidebarIcon"><FiHome /></div>
            호서대 포털시스템
          </a>
        </li>
      </ul>
      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <div className="Side-Modal">
          {/* 모달 내용 */}
          <div className="Side-ModalContent">
            <span className="Side-CloseModalButton" onClick={handleCloseModal}>×</span>
            <div className="Side-ModalHeaderText">정보 수정하기</div> 
            <form onSubmit={handleSubmit}>
              <label className="Side-label">이름:</label>
              <input className="side-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <label className="Side-label">학번:</label>
              <input className="side-input" type="text" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} />
              <label className="Side-label" >학과:</label>
              <input className="side-input" type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
              <button className="side-button" type="submit">저장</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

