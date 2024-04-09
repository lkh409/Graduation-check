import { Component } from "react";
import "./NavbarStyles2.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { isLoggedIn, toggleLogin } = this.props;

    return (
      <nav className="NavbarItems">
        <Link to="/" className="navbar-logo">HOSEO</Link>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
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
              <button onClick={toggleLogin}>로그아웃</button>
            ) : (
              <Link to="/login">
                <button>로그인</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;