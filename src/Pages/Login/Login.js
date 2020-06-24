import React from "react";
import "./Login.scss";
import "styles/reset.scss";
import login_side_btn from "Images/login_side_btn.jpg";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div class="login-back-btn-section">
          <img class="login-back-btn" src={login_side_btn} alt="" />
        </div>
        <div className="Login_Contanier">
          <div className="text_box">
            <div className="text_title">어서오세요.</div>
            <p class="text_content">닥터마틴에 오신 것을 환영합니다.</p>
          </div>
          <div className="text_box2">
            <p class="text_title2">로그인</p>
          </div>
          <div className="input-container">
            <div class="input_login_box_title">
              <span class="input_login_box_msg">아이디</span>
            </div>
            <input className="id" type="text" />
            <div class="input_pw_box_title">
              <span class="input_pw_box_msg">비밀번호</span>
            </div>
            <input className="password" type="password" />
            <div className="find_id_pw">
              <label className="check_box">
                <div className="flex">
                  <div className="left_option">
                    <input
                      class="check_box_input"
                      type="checkbox"
                      name="idsa"
                      id="idsave"
                      value="checked"
                    ></input>
                    <span className="check_box_idsave">아이디 자동저장</span>
                  </div>
                  <div className="right_option">
                    <a href="https://drmartens.co.kr/member/find">
                      아이디 / 비밀번호 찾기
                    </a>
                  </div>
                </div>
              </label>
            </div>
            <div class="login-section">
              <button className="button">로그인</button>
            </div>
            <div className="flex2">
              <div className="sing_up">
                <a href="https://m.drmartens.co.kr/member/agreement">
                  회원가입
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
