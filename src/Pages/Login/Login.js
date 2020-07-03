import React from "react";
// import { withRouter } from "react-router-dom";
import Nav from "Components/Nav/Nav";
import ItemBoxID from "Components/ItemBox/ItemBoxID";
import { LOGIN_SIDE_BTN } from "config";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }
  inputChangeHandler = (e, userinfo) => {
    this.setState({
      [userinfo]: e.target.value,
    });
  };

  componentDidMount() {}

  handleBtn = () => {
    // post
    fetch("http://10.58.5.123:8001/users/signin", {
      // fetch 인자의 첫 번째 인자는 api 주소고, 두 번째 인자는 객체 형태이고
      method: "POST", // 메소드 뒤에 포스트를 스트링으로 적어줘야 하는데, get은 디폴트 값이 원래 있어서 안 써줘도 됨.
      body: JSON.stringify({
        // body를 json화 시켜서 보내줘야 함. 토큰이 들어오면 json body에 들어옴.
        nickname: this.state.id,
        password: this.state.password,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          alert("로그인이 성공했습니다.");
          this.props.history.push("/");
        }
        return res.json();
      })
      // .then(res) => res.json
      .then((res) => {
        console.log(res);
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
        }
      });

    // .then((res) => {
    //   if (res.token) {
    //     localStorage.setItem("json", res.token);
    //     this.props.history.push("/main");
    //   }
    // });
  };

  render() {
    console.log(this.state);
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
              <ItemBoxID
                userinfo="id"
                name="아이디"
                inputChangeHandler={this.inputChangeHandler}
              />
              <ItemBoxID
                userinfo="password"
                name="비밀번호"
                type="password"
                inputChangeHandler={this.inputChangeHandler}
              />
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
                <button className="button" onClick={this.handleBtn}>
                  로그인
                </button>
              </div>
              <div className="flex_div_box2">
                <div className="sign_up">
                  <button
                    className="sign_up_text"
                    onClick={() => this.props.history.push("/signup")}
                  >
                    회원가입
                  </button>
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
