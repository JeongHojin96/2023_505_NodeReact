// react-router-dom 에서 제공하는 a link 확장 컴포넌트
import { NavLink } from "react-router-dom";
import "../css/NavList.css";
const NavList = () => {
  return (
    <nav className="main">
      <ul>
        <li>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/"> 공지사항</NavLink>
          <NavLink to="/"> 자유게시판</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
