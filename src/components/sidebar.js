import React, { useState, useEffect, useRef} from "react";
import profileImage from "../assets/profile.jpg";
import { FiHome } from "react-icons/fi";
import "../styles/sidebar.css";
import { findAll } from "../api/departments";

const Sidebar = ({ userInfo }) => {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempDepartment, setTempDepartment] = useState("");
  const [departmentList, setDepartmentList] = useState([]); // 학과 목록을 위한 상태

  const nameInputRef = useRef(null);

  useEffect(() => {
    console.log("Received userInfo:", userInfo);  // userInfo 로그 출력
    if (userInfo) {
      setName(userInfo.name || "");
      setStudentNumber(userInfo.id || "");
      setDepartment(userInfo.department?.name || ""); // Optional chaining 사용
      setTempName(userInfo.name || "");
      setTempDepartment(userInfo.department?.name || ""); // Optional chaining 사용
    } 
  }, [userInfo]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentsData = await findAll();
        console.log("Fetched departmentsData:", departmentsData);

        // 응답 데이터가 객체인 경우 처리
        if (departmentsData && typeof departmentsData === 'object' && departmentsData.data) {
          setDepartmentList(departmentsData.data);
        } else if (Array.isArray(departmentsData)) {
          setDepartmentList(departmentsData);
        } else {
          console.error('Unexpected data format:', departmentsData);
          setDepartmentList([]);
        }
      } catch (error) {
        console.error('Error fetching departments:', error.message);
        setDepartmentList([]);
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
    setTempName(name);
    setTempDepartment(department);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 데이터를 서버에 전송하는 등의 처리를 할 수 있습니다.
    console.log("Form submitted with:", {
      tempName,
      tempDepartment,
    });
    setName(tempName);
    setDepartment(tempDepartment);
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
                {/* 임시 상태를 값으로 설정하고 onChange 이벤트 핸들러를 통해 업데이트 */}
                <input className="side-input" type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} maxLength={4} />
              </div>
              <div className="side-input-wrapper">
                <label className="Side-label">학과:</label>
                <select className="side-input" value={tempDepartment} onChange={(e) => setTempDepartment(e.target.value)} ref={nameInputRef}>
                {departmentList.map(dept => (
                    <option key={dept.id} value={dept.name}>{dept.name}</option>
                  ))}
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
