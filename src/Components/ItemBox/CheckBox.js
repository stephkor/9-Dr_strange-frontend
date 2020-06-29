import React from "react";
import "Pages/SignUp/SignUp.scss";
import "./CheckBox.scss";

class CheckBox extends React.Component {
  render() {
    console.log(this.props);
    return (
      <label className="check_box">
        <div className="flex_div_box">
          <div className="left_option">
            <input
              className="check_box_input"
              type="checkbox"
              value="checked"
              onClick={(e) => this.props.handleClickCheckBox(e)}
            />
            <span className="check_box_save_info">{this.props.name}</span>
          </div>
        </div>
      </label>
    );
  }
}
export default CheckBox;
