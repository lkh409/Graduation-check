import React from "react";
import profileImage from "../assets/profile.jpg";
import { FiHome } from "react-icons/fi";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="SidebarWrapper">
      <div className="SidebarHeader">
        <img className="ProfileImage" src={profileImage} alt="Profile" />
        <div className="UserInfo">
          <div>김이름</div>
          <div>123456789</div>
          <div>컴퓨터공학과</div>
          <button className="sidebar-button">정보 수정하기</button>
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
    </div>
  );
};

export default Sidebar;