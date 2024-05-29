import { Component } from "react";
import "../styles/NavbarStyles2.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { isLoggedIn, toggleLogin } = this.props; // props로 로그인 상태와 로그아웃 함수 받음

    return (
      <nav className="Navbar-container">
        <div className="NavbarItems">
          <Link to="/" className="navbar-logo">
            HOSEO
          </Link>

          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              // 로그인 상태에 따라 "마이 페이지"와 "로그아웃" 메뉴를 표시하거나 숨김
              if (
                (item.title === "마이 페이지" || item.title === "로그아웃") &&
                !isLoggedIn
              ) {
                return null; // 로그인 상태가 아닐 때는 마이 페이지와 로그아웃 메뉴를 제거
              }
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              {isLoggedIn ? (
                <button onClick={toggleLogin}>로그아웃</button> // 로그아웃 버튼 클릭 시 로그아웃 함수 호출
              ) : (
                <Link to="/login">
                  <button>로그인</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
