import React from "react";
import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";
import "./MyPageHome.scss";
// import "styles/reset.scss";

class MyPageHome extends React.Component {
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
              <img class="https://m.drmartens.co.kr/data/skin/dr_marten_pc/images/mypage/logo@3x.png"></img>
              <span className="add_profile_image"></span>
            </div>
          </div>
        </div>
        <div className="mypage_section_my_info"></div>

        <Footer />
      </div>
    );
  }
}

export default MyPageHome;
