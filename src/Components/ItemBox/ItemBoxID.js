import React from "react";
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
          />
        </div>
      </div>
    );
  }
}
export default ItemBoxID;
