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
      username: "",
      id: "",
      password: "",
      passwordCheck: "",
      email: "",
      date: "",
      checkedValue: false,
    };
  }
  handleIdPw = (e, userinfo) => {
    this.setState({
      [userinfo]: e.target.value,
    });
    console.log(e, userinfo);
  };

  handleClickCheckBox = (e) => {
    console.log(e.target.checked);
  };

  checkMatchPassword = () => {
    let timer;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (this.state.password === this.state.passwordCheck) {
        this.setState({ isMatchPassword: true });
      } else {
        this.setState({ isMatchPassword: false });
      }
    }, 500);
  };

  render() {
    return (
      <>
        <Nav />
        <div className="sign_up_container">
          <FormBox />
          <div className="text_box_div">
            <p className="text_login">회원가입</p>
          </div>
          <div className="container">
            <ItemBoxID
              name="이름"
              userinfo="username"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID
              name={
                this.state.id.length >= 6
                  ? "사용할 수 있는 아이디입니다."
                  : this.state.id.length === 0
                  ? "아이디"
                  : "아이디 제한 글자를 맞춰주세요."
              }
              chagneColor={
                this.state.id.length >= 6
                  ? "a"
                  : this.state.id.length === 0
                  ? "b"
                  : "c"
              }
              userinfo="id"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID
              name={
                this.state.password.length >= 6 ||
                this.state.password.includes("@")
                  ? "비밀번호는 공백 없는 영문, 숫자 포함 6글자-20자"
                  : "비밀번호"
              }
              userinfo="password"
              type="password"
              text="공백 없는 영문, 숫자 포함 6-20자"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID
              name={
                this.state.password === this.state.passwordCheck
                  ? "비밀번호 확인"
                  : "서로 다른 비밀번호입니다."
              }
              userinfo="passwordCheck"
              type="password"
              text="공백 없는 영문, 숫자 포함 6-20자"
              handleIdPw={this.handleIdPw}
            />
            <ItemBoxID
              name="생년월일"
              type="date"
              userinfo="date"
              handleIdPw={this.handleIdPw}
            />
            {/* <ItemBoxID
              name="이메일"
              type="email"
              handleIdPw={this.handleIdPw}
            /> */}
            <div className="input_email_box">
              {/* <span className="input_email_box_msg">이메일</span> */}
              <input
                className="email_name"
                type="text"
                handleIdPw={this.handleIdPw}
              />
              <div className="email_at_flex">
                <span className="email_at">@</span>
              </div>
              {/* <input className="email_add" type="text" /> */}
              <select className="email_add">
                <option value="">직접 입력</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="nate.com">nate.com</option>
              </select>
            </div>
            <input className="email_import_add" readOnly="readonly" />
            <CheckBox
              name="정보 메일을 수신하겠습니다."
              handleClickCheckBox={this.handleClickCheckBox}
            />
            <div className="input_phone_box">
              <span className="input_phone_box_msg">휴대폰</span>
              <input className="phone_number" type="tel" />
              <input className="phone_number2" type="tel" />
              <input className="phone_number3" type="tel" />
            </div>
            <CheckBox
              name="SMS를 수신하겠습니다."
              handleClickCheckBox={this.handleClickCheckBox}
            />
            <div className="search_id_box">
              <ItemBoxID name="추천인ID(선택)" handleIdPw={this.handleIdPw} />
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
