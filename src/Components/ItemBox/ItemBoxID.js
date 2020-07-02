/* eslint-disable no-unused-vars */
import React from "react";
import "./ItemBoxID.scss";

class ItemBoxID extends React.Component {
  render() {
    const { type } = this.props;
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
            type={type}
            placeholder={this.props.text}
            onChange={(e) =>
              this.props.inputChangeHandler(e, this.props.userinfo)
            }
          />
        </div>
      </div>
    );
  }
}
export default ItemBoxID;
