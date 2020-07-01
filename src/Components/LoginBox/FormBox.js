import React from "react";
import "Pages/SignUp/SignUp.scss";
import "./FormBox.scss";
import { LOGIN_SIDE_BTN } from "config";
class FormBox extends React.Component {
  render() {
    return (
      <>
        <div className="text_box_div">
          <div className="text_box_title">환영합니다.</div>
          <img className="login_btn_image" src={LOGIN_SIDE_BTN} alt="" />
        </div>
        <p className="text_box_content">지금 바로 다양한 혜택을 만나보세요.</p>
      </>
    );
  }
}

export default FormBox;
