/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Shopping.scss";
import {
  SHOPPING_1,
  SHOPPING_2,
  SHOPPING_3,
  SHOPPING_4,
  SHOPPING_5,
} from "config";

class Shopping extends React.Component {
  render() {
    return (
      <div className="Shopping">
        <div className="mypage_collect_section">
          <div className="collect_section">
            <div className="collect_section_title">Shopping</div>
            <div className="collect_section_text">
              나의 쇼핑 정보를 확인하세요.
            </div>
            <div className="collect_section"></div>
            <div className="collect_section"></div>
            <ul className="collect_section_list">
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={SHOPPING_1}></img>
                <span className="collect_list_text">주문/배송 조회</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={SHOPPING_2}></img>
                <span className="collect_list_text">교환/반품 내역</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={SHOPPING_3}></img>
                <span className="collect_list_text">취소/환불 내역</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={SHOPPING_4}></img>
                <span className="collect_list_text">자주 쓰는 배송지</span>
                <span className="collect_list_sign">></span>
              </li>
              <li className="collect_list_image_list">
                <img className="collect_list_image" src={SHOPPING_5}></img>
                <span className="collect_list_text">나의 쿠폰</span>
                <span className="collect_list_sign">></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Shopping;
