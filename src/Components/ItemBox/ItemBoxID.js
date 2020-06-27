import React from "react";
// import "Pages/SignUp/SignUp.scss";
import "./ItemBoxID.scss";

class ItemBoxID extends React.Component {
  render() {
    const { className, type, text, userinfo } = this.props;
    console.log(this.props);
    return (
      <div className="ItemBoxID">
        <div className="input_component_box">
          <span className="input_component_box_msg">{this.props.name}</span>
        </div>
        <div>
          <input
            className={className}
            type={type}
            placeholder={text}
            userinfo={userinfo}
            onChange={(e) => this.props.handleIdPw(e, userinfo)}
            // 해당 부분도 {() => console.log(ok)} 를 통해서 이상 없음을 확인했습니다.
          />
        </div>
      </div>
    );
  }
}
export default ItemBoxID;
