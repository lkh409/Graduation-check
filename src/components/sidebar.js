import React, { useState } from "react";
import profileImage from "../assets/profile.jpg";
import { FiHome } from "react-icons/fi";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [name, setName] = useState("김이름");
  const [studentNumber, setStudentNumber] = useState("123456789");
  const [department, setDepartment] = useState("컴퓨터공학과");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempStudentNumber, setTempStudentNumber] = useState(studentNumber);
  const [tempDepartment, setTempDepartment] = useState(department);

  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTempName(name);
    setTempStudentNumber(studentNumber);
    setTempDepartment(department);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
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
                <input className="side-input" type="text" value={tempName} onChange={(e) => setName(e.target.value)} maxLength={10} />
              </div>
              <div className="side-input-wrapper">
                <label className="Side-label">학번:</label>
                <input className="side-input" type="text" value={tempStudentNumber} onChange={(e) => setStudentNumber(e.target.value)} maxLength={9} />
              </div>
              <div className="side-input-wrapper">
                <label className="Side-label">학과:</label>
                <select className="side-input" value={tempDepartment} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="컴퓨터공학과">컴퓨터공학과</option>
                  <option value="전자공학과">전자공학과</option>
                  <option value="화학공학과">화학공학과</option>
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








