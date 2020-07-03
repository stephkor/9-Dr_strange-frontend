/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Activity.scss";
import { ACTIVITY_1, ACTIVITY_2, ACTIVITY_3, ACTIVITY_4 } from "config";

class Activity extends React.Component {
  render() {
    return (
      <div className="Shopping">
        <div className="mypage_collect_section">
          <div className="collect_section">
            <div className="collect_section_title">Activity</div>
            <div className="collect_section_text">
              나의 활동 정보를 확인하세요.
            </div>
            <div className="collect_section"></div>
            <div className="collect_section"></div>
            <ul className="collect_section_list">
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={ACTIVITY_1}></img>
                <span className="collect_list_text">위시리스트</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={ACTIVITY_2}></img>
                <span className="collect_list_text">내가 쓴 글</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={ACTIVITY_3}></img>
                <span className="collect_list_text">내가 봤던 것들</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={ACTIVITY_4}></img>
                <span className="collect_list_text">회원 정보 수정</span>
                <span className="collect_list_sign">></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Activity;
