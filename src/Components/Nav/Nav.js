import React from "react";
import NavFooterIcon from "../NavFooterIcon";
import { Link } from "react-router-dom";
import "./Nav.scss";
import {
  HAMBURGER_ICON,
  LOGO,
  PATH_SEARCH,
  PATH_WISH,
  PATH_CART,
  PATH_VIEWED,
  PATH_MYPAGE,
} from "config";

class Nav extends React.Component {
  render() {
    return (
      <header className="Nav">
        <nav className="nav_container gray-bg">
          <div className="nav_menu m-auto m-w-1140">
            <ul>
              <li>
                <a href="">로그인</a>
              </li>
              <li>
                <a className="nav_sign_up_btn" href="">
                  회원가입
                </a>
              </li>
              <li>
                <a href="">매장찾기</a>
              </li>
              <li>
                <a href="">브랜드헤리티지</a>
              </li>
              <li>
                <a href="">고객센터</a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="customer_container">
          <div className="customer_menu m-auto m-w-1140">
            <button className="hamburger_menu">
              <img alt="hamburger_menu_icon" src={HAMBURGER_ICON} />
            </button>
            <Link to="/">
              <img className="logo" alt="Dr.Martins_logo" src={LOGO} />
            </Link>
            <input
              className="search_form"
              type="text"
              placeholder="검색어를 입력해 주세요."
            />
            <ul>
              <NavFooterIcon
                width="32"
                heigth="32"
                view="0 0 32 32"
                path={PATH_SEARCH}
              />
              <NavFooterIcon
                width="35"
                heigth="29"
                view="0 0 35 29"
                path={PATH_WISH}
              />
              <NavFooterIcon
                width="28"
                heigth="33"
                view="0 0 28 33"
                path={PATH_CART}
              />
              <NavFooterIcon
                width="39"
                heigth="28"
                view="0 0 39 28"
                path={PATH_VIEWED}
              />
              <NavFooterIcon
                width="33"
                heigth="32"
                view="0 0 33 32"
                path={PATH_MYPAGE}
              />
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
