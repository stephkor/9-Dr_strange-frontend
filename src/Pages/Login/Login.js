import React from "react";
import Nav from "Components/Nav/Nav";
import "./Login.scss";
import "styles/reset.scss";
import { LOGIN_SIDE_BTN } from "config";
import ItemBoxID from "Components/ItemBox/ItemBoxID";

class Login extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Login">
          <div className="Login_Contanier">
            <div className="text_box_div">
              <div className="text_box_title">
                어서오세요.
                <img className="login_btn_image" src={LOGIN_SIDE_BTN} alt="" />
              </div>
              <p className="text_box_content">
                닥터마틴에 오신 것을 환영합니다.
              </p>
            </div>
            <div className="text_box_div2">
              <p className="text_box_title2">로그인</p>
            </div>
            <div className="input_container">
              <ItemBoxID name="아이디" />
              <ItemBoxID name="비밀번호" type="password" />
              <div className="find_id_pw">
                <label className="check_box">
                  <div className="flex_div_box">
                    <input className="check_box_input" type="checkbox"></input>
                    <span className="check_box_idsave">아이디 자동저장</span>
                  </div>
                  <div className="right_option">
                    <a href="https://drmartens.co.kr/member/find">
                      아이디 / 비밀번호 찾기
                    </a>
                  </div>
                </label>
              </div>
              <div className="login-section">
                <button className="button">로그인</button>
              </div>
              <div className="flex_div_box2">
                <div className="sign_up">
                  <a
                    className="sign_up_text"
                    href="https://m.drmartens.co.kr/member/agreement"
                  >
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
