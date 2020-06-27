import React from "react";
import "./Menu.scss";
import HamburgerList from "./HamburgerList";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <HamburgerList categoryTitle={"실시간 검색"} />
        <HamburgerList categoryTitle={"신상품"} />
        <HamburgerList categoryTitle={"여성"} />
        <HamburgerList categoryTitle={"남성"} />
        <HamburgerList categoryTitle={"키즈"} />

        <ul className="list_wrap">
          <li className="category_list">
            <button className="category_button">
              <span className="category_title">/고객센터</span>
              <svg
                data-v-c3045632=""
                version="1.1"
                viewBox="0 0 60 35"
                class="arrow_cs"
              >
                <path
                  className="arrow_cs_path"
                  pid="0"
                  fill="#111"
                  fill-rule="evenodd"
                  d="M.013 4.305L4.247.015l25.755 26.35L55.757.015l4.233 4.29-29.988 30.683L.013 4.305z"
                ></path>
              </svg>
            </button>
          </li>
          <li className="category_list">
            <button className="category_button">
              <span className="category_title">/고객센터</span>
              <svg
                data-v-c3045632=""
                version="1.1"
                viewBox="0 0 60 35"
                className="arrow_cs"
              ></svg>
              <path
                className="arrow_cs_path"
                pid="0"
                fill="#111"
                fill-rule="evenodd"
                d="M.013 4.305L4.247.015l25.755 26.35L55.757.015l4.233 4.29-29.988 30.683L.013 4.305z"
              ></path>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
