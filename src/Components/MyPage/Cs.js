/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cs.scss";
import { CS_1, CS_2, CS_3 } from "config";

class CS extends React.Component {
  render() {
    return (
      <div className="Shopping">
        <div className="mypage_collect_section">
          <div className="collect_section">
            <div className="collect_section_title">CS Center</div>
            <div className="collect_section_text">
              고객센터를 이용해 보세요.
            </div>
            <div className="collect_section"></div>
            <div className="collect_section"></div>
            <ul className="collect_section_list">
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={CS_1}></img>
                <span className="collect_list_text">공지사항</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={CS_2}></img>
                <span className="collect_list_text">1:1 문의</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={CS_3}></img>
                <span className="collect_list_text">자주 묻는 질문</span>
                <span className="collect_list_sign">></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default CS;
