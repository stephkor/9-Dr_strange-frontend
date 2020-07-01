import React from "react";
import "./ItemBoxID.scss";

class ItemBoxID extends React.Component {
  render() {
    return (
      <div className="ItemBoxID">
        <div className="input_component_box">
          <span className={`input_component_box_msg ${this.props.chagneColor}`}>
            {this.props.name}
          </span>
        </div>
        {/* <span style={{ color: "black" }}>hi</span> */}
        <div>
          <input
            className={this.props.chagneColor} //input className ="a" / "b" /"c"
            type={this.props.type}
            placeholder={this.props.text}
            onChange={(e) => this.props.handleIdPw(e, this.props.userinfo)}
          />
        </div>
      </div>
    );
  }
}
export default ItemBoxID;
