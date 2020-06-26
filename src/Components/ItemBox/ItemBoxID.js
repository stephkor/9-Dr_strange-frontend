import React from "react";
import "Pages/SignUp/SignUp.scss";
import "./ItemBoxID.scss";

class ItemBoxID extends React.Component {
  render() {
    const { className, type, text } = this.props;
    return (
      <div className="ItemBoxID">
        <div className="input_component_box">
          <span className="input_component_box_msg">{this.props.name}</span>
        </div>
        <input className={className} type={type} placeholder={text} />
      </div>
    );
  }
}
export default ItemBoxID;
