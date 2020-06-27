import React from "react";
import Nav from "Components/Nav/Nav";
import "./SignUp.scss";
import "styles/reset.scss";
import FormBox from "Components/LoginBox/FormBox";
import ItemBoxID from "Components/ItemBox/ItemBoxID";
import CheckBox from "Components/ItemBox/CheckBox";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      passwordCheck: "",
      email: "",
    };
  }
  handleIdPw = (e, userinfo) => {
    this.setState({
      [userinfo]: e.target.value,
    });
    console.log(e, userinfo);
  };
  render() {
    return (
      <>
        <Nav />
        <div className="sign_up_container">
          <FormBox />
          <div className="text_box_div">
            <p className="text_login">로그인</p>
          </div>
          <div className="container">
            <ItemBoxID name="이름" handleIdPw={this.handleIdPw} />
            <ItemBoxID
              name={
                this.state.id.length >= 6
                  ? "사용할 수 있는 아이디입니다."
                  : "아이디"
              }
              userinfo="id"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID
              name="비밀번호"
              userinfo="password"
              type="password"
              text="공백 없는 영문, 숫자 포함 6-20자"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID
              name="비밀번호 확인"
              userinfo="passwordCheck"
              type="password"
              text="공백 없는 영문, 숫자 포함 6-20자"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID name="생년월일" type="date" />
            <ItemBoxID name="이메일" type="email" />
            <div className="input_email_box">
              <span className="input_email_box_msg">이메일</span>
              <input className="email_name" type="text" />
              <div className="email_at_flex">
                <span className="email_at">@</span>
              </div>
              <input className="email_add" type="text" />
            </div>

            <div className="email_import_add"></div>
            <CheckBox name="정보 메일을 수신하겠습니다." />
            <div className="input_phone_box">
              <span className="input_phone_box_msg">휴대폰</span>
              <input className="phone_number" type="tel" />
              <input className="phone_number2" type="tel" />
              <input className="phone_number3" type="tel" />
            </div>
            <CheckBox name="SMS를 수신하겠습니다." />
            <div className="search_id_box">
              <ItemBoxID name="추천인ID(선택)" />
              {/* <input className="" type="text" /> */}

              <button className="search_id_btn" type="button">
                <p>확인</p>
              </button>
            </div>
            <div className="search_id_message">
              <p>신규 가입 시 - 마일리지 10,000원 추가 지급</p>
              <p>추천인 ID 입력 시 마일리지 2,000원 추가 지급</p>
            </div>
            <div className="sign_btn">
              <button>회원가입</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
