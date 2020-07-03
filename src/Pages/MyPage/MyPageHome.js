/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import Shopping from "Components/MyPage/Shopping";
import "./MyPageHome.scss";
import {
  MY_PAGE_PROFILE,
  MY_PAGE_PROFILE2,
  MY_POINT,
  MY_CUPON,
  MY_MISSION,
  MY_SAWTOOTH,
} from "config";
import Activity from "Components/MyPage/Activity";
import CS from "Components/MyPage/Cs";
// import "styles/reset.scss";

class MyPageHome extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.123:8001/users/mypage", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("user_name", res.user_name);
        this.setState({ username: res.user_name });
      });
  }

  render() {
    return (
      <div className="MyPageHome">
        <Nav />
        <div className="mypagehome_header">
          <div className="mypagehome_header_center">
            <div className="mypagehome_header_title">마이페이지</div>

            <a
              href="https://m.drmartens.co.kr/mypage/index"
              className="mypagehome_header_home"
            >
              Home
              <div className="mypagehome_header_home_under_bar"></div>
            </a>

            <a
              href="https://m.drmartens.co.kr/mypage/order_catalog"
              className="mypagehome_header_shopping"
            >
              Shopping
            </a>

            <a
              href="https://m.drmartens.co.kr/mypage/wish"
              className="mypagehome_header_activity"
            >
              Activity
            </a>

            <a
              href="https://m.drmartens.co.kr/service/cs"
              className="mypagehome_header_cs_center"
            >
              CS center
            </a>
          </div>
        </div>

        <div className="mypage_section_my_info_summary">
          <div className="summary_left">
            <div className="summary_left_image">
              <img className="profile_image" src={MY_PAGE_PROFILE}></img>
              <span className="add_profile_image">
                <img
                  className="add_profile_add_image"
                  src={MY_PAGE_PROFILE2}
                ></img>
              </span>
            </div>
            {/* point */}
            <div className="mypage_section_itemes">
              <div className="mypage_items_box">
                <img className="info_image_point" src={MY_POINT}></img>
                <p className="info_item_name">포인트</p>
                <p className="info_item_price">10,000</p>
              </div>
              <div className="mypage_items_box">
                <img className="info_image_cupon" src={MY_CUPON}></img>
                <p className="info_item_name">쿠폰</p>
                <p className="info_item_price">1</p>
              </div>
              <div className="mypage_items_box">
                <img className="info_mission" src={MY_MISSION}></img>
                <p className="info_item_name">미션</p>
                <p className="info_item_price">4</p>
              </div>
            </div>
          </div>
          <div className="summary_right">
            <p className="welcome_name">
              <strong className="welcome_name_weight">
                {this.state.username},&nbsp;
              </strong>{" "}
              환영합니다.
              <img className="welcome_sawtooth_icon" src={MY_SAWTOOTH}></img>
            </p>
            <p className="docs_family">DOCS FAMILY</p>
            <div className="welcome_underbar"></div>
            <div className="welcome_underbar_name">
              <p className="docs_family_text">DOCS FAMILY</p>
              <p className="docs_rating">DOCS SILVER</p>
            </div>
            <p className="docs_rating_message">
              <strong className="color_change">DOCS SILVER</strong> 등급이
              되시려면<br></br>
              결제 금액 <strong className="color_change">300, 000</strong>원이
              더 필요합니다.
            </p>
            <p></p>
          </div>
        </div>
        <div className="flex">
          <Shopping className="shopping" />
          <Activity className="activity" />
          <CS className="cs" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyPageHome;
