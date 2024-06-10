import React, { useState, useEffect, useRef, useContext} from "react";
import profileImage from "../assets/profile.jpg";
import { FiHome } from "react-icons/fi";
import "../styles/sidebar.css";
import api from "../api";
import { useReadLocalStorage } from "usehooks-ts";
import { UserContext } from "../context";

const Sidebar = () => {
  const userInfo = useContext(UserContext)
  const token = useReadLocalStorage('token')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [departmentGroups, setDepartmentGroups] = useState([]); // 학과 목록을 위한 상태
  const [updateable, setUpdateable] = useState({})

  const nameInputRef = useRef(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      const departmentGroups = await api.departmentGroups.findAll();
      console.log("Fetched departmentsData:", departmentGroups);

      if (Array.isArray(departmentGroups)) {
        setDepartmentGroups(departmentGroups)
      }
    };
    
    fetchDepartments();
  }, []);

    
  useEffect(() => {
    if (isModalOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isModalOpen]);


  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    // 모달 닫을 때 임시 상태를 초기 상태로 설정
    setUpdateable({})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const password = prompt('비밀번호를 입력해주세요')
    if (!password) {
      return
    }

    api.members.update({
      id: userInfo.id,
      name: updateable?.name ?? userInfo.name,
      departmentId: updateable?.departmentId ?? userInfo.department.id,
      password,
    }, token).then((response) => {
      setIsModalOpen(false);
      window.location.reload(); // 정보 수정 후 새로고침
    })
  };

  const onLeaveClick = () => {
    const password = prompt('비밀번호를 입력해주세요')
    if (!password) {
      return
    }

    api.members.leave({ password }, token).then((response) => {
      if (response.status !== 204) {
        alert('비밀번호가 일치하지 않습니다')
      }
      window.location.href = '/login';
      //탈퇴 후 로그인 페이지 이동
    })
  }

  return (
    <div className="SidebarWrapper">
      <div className="SidebarHeader">
        <img className="ProfileImage" src={profileImage} alt="Profile" />
        <div className="UserInfo">
        <div>{userInfo?.name}</div>
          <div>{userInfo?.id}</div>
          <div>{userInfo?.department?.name}</div>
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
                <input className="side-input" type="text" onChange={(e) => setUpdateable((u) => ({ ...u, name: e.target.value }))} maxLength={4} />
              </div>
              <div className="side-input-wrapper">
                <label className="Side-label">학과:</label>
                <select className="side-input" onChange={(e) => setUpdateable((u) => ({ ...u, departmentId: parseInt(e.target.value) }))} ref={nameInputRef} defaultValue={userInfo?.department?.id}>
                {departmentGroups.map(({ id, name, departments }) => (
                    <optgroup key={id} label={name}>
                      {departments.map((department) => (
                        <option key={department.id} value={department.id} >{department.name}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="side-button-wrapper">
                <button className="side-button" type="submit">저장</button>
                <button type="button" className="side-delete-button" onClick={() => onLeaveClick()}>회원탈퇴</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
