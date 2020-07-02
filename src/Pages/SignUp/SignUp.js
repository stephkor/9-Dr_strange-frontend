/* eslint-disable no-template-curly-in-string */
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
      emailId: "",
      emailAdd: "",
      phoneNumber: "",
      phoneNumber2: "",
      phoneNumber3: "",
      checkedValue: false,
    };
  }
  inputChangeHandler = (e, userinfo) => {
    this.setState({
      [userinfo]: e.target.value,
    });
  };
  handleEmailAdd = (e) => {
    this.setState({
      emailAdd: e.target.value,
    });
  };

  buttonHandler = () => {
    fetch("http://10.58.6.113:8001/users/signup", {
      // fetch 인자의 첫 번째 인자는 api 주소고, 두 번째 인자는 객체 형태이고
      method: "POST", // 메소드 뒤에 포스트를 스트링으로 적어줘야 하는데, get은 디폴트 값이 원래 있어서 안 써줘도 됨.
      body: JSON.stringify({
        // body를 json화 시켜서 보내줘야 함. 토큰이 들어오면 json body에 들어옴.
        name: this.state.username,
        nickname: this.state.id,
        password: this.state.password,
        birthday: this.state.date,
        email: `${this.state.emailId}@${this.state.emailAdd}`,
        phone_number: `${this.state.phoneNumber}${this.state.phoneNumber2}${this.state.phoneNumber3}`,
        checkedValue: false,
      }),
    }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        alert("회원가입이 완료되었습니다.");
        this.props.history.push("/login");
      }
    });
    // .then((res) => {
    //   if (res.token) {
    //     // localStorage.setItem("JsonWebToken", res.token);
    //     return this.props.history.push("/login");
    //   }
    // });
    // .then((res) => console.log(res)); // then.(res=>localStorage.setItem("token", res.token)) -> 토큰 받음.
  };
  l;

  render() {
    console.log("emailadd", this.state.emailAdd);
    const {
      username,
      id,
      password,
      passwordCheck,
      email,
      date,
      emailId,
      emailAdd,
      phoneNumber,
      phoneNumber2,
      phoneNumber3,
      checkedValue,
    } = this.state;
    console.log(this.state);

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
              inputChangeHandler={this.inputChangeHandler}
            />
            <ItemBoxID
              name={
                id.length >= 6
                  ? "사용할 수 있는 아이디입니다."
                  : id.length === 0
                  ? "아이디"
                  : "아이디 제한 글자를 맞춰주세요."
              }
              chagneColor={id.length >= 6 ? "a" : id.length === 0 ? "b" : "c"}
              userinfo="id"
              inputChangeHandler={this.inputChangeHandler}
            />
            <ItemBoxID
              name={
                password.length >= 6 &&
                password.length < 20 &&
                !password.includes(" ")
                  ? "올바른 형식의 비밀번호를 입력했습니다."
                  : password.length >= 0 &&
                    password.length < 20 &&
                    !password.includes(" ")
                  ? "비밀번호"
                  : password.length >= 6 &&
                    password.length < 20 &&
                    !password.includes(" ")
                  ? "올바른 비밀번호를 입력했습니다."
                  : "비밀번호는 공백 없는 영문, 숫자 포함 6-20자"
              }
              chagneColor={
                password.length < 6 && !password.includes(" ")
                  ? "b"
                  : password.length < 6 || password.includes(" ")
                  ? "c"
                  : "a"
              }
              userinfo="password"
              type="password"
              text="공백 없는 영문, 숫자 포함 6-20자"
              inputChangeHandler={this.inputChangeHandler}
            />
            <ItemBoxID
              name={
                !passwordCheck
                  ? "비밀번호 확인"
                  : password && password !== passwordCheck
                  ? "비밀번호와 비밀번호 확인이 일치하지 않습니다."
                  : "비밀번호 확인이 완료되었습니다."
              }
              chagneColor={
                passwordCheck.length === 0
                  ? "b"
                  : password && password !== passwordCheck
                  ? "c"
                  : "a"
              }
              userinfo="passwordCheck"
              type="password"
              text="공백 없는 영문, 숫자 포함 6-20자"
              inputChangeHandler={this.inputChangeHandler}
            />
            <ItemBoxID
              name="생년월일"
              type="date"
              userinfo="date"
              inputChangeHandler={this.inputChangeHandler}
            />
            {/* <ItemBoxID
              name="이메일"
              type="email"
              inputChangeHandler={this.inputChangeHandler}
            /> */}
            <div className="input_email_box">
              {/* <span className="input_email_box_msg">이메일</span> */}
              <input
                className="email_name"
                userinfo="emailId"
                type="text"
                onChange={(e) => this.inputChangeHandler(e, "emailId")}
              />
              <div className="email_at_flex">
                <span className="email_at">@</span>
              </div>
              {/* <input className="email_add" type="text" /> */}
              <select className="email_add" onClick={this.handleEmailAdd}>
                {/* key={item[valueProperty]} */}
                <option value="" onClick={this.handleEmailAdd}>
                  직접 입력
                </option>
                <option value="gmail.com" onClick={this.handleEmailAdd}>
                  gmail.com
                </option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="nate.com">nate.com</option>
              </select>
            </div>
            <input
              className="email_import_add"
              value={
                emailAdd && emailId
                  ? `${emailId}@${emailAdd}`
                  : emailId
                  ? `${emailId}`
                  : ""
              }
            />

            <CheckBox
              name="정보 메일을 수신하겠습니다."
              handleClickCheckBox={this.handleClickCheckBox}
            />
            <div className="input_phone_box">
              <span className="input_phone_box_msg">휴대폰</span>
              <input
                className="phone_number"
                userinfo="phoneNumber"
                type="tel"
                onChange={(e) => this.inputChangeHandler(e, "phoneNumber")}
              />
              <input
                className="phone_number2"
                userinfo="phoneNumber2"
                type="tel"
                onChange={(e) => this.inputChangeHandler(e, "phoneNumber2")}
              />
              <input
                className="phone_number3"
                userinfo="phoneNumber3"
                type="tel"
                onChange={(e) => this.inputChangeHandler(e, "phoneNumber3")}
              />
            </div>
            <CheckBox
              name="SMS를 수신하겠습니다."
              handleClickCheckBox={this.handleClickCheckBox}
            />
            <div className="search_id_box">
              <ItemBoxID
                name="추천인ID(선택)"
                inputChangeHandler={this.inputChangeHandler}
              />
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
              <button onClick={this.buttonHandler}>회원가입</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
