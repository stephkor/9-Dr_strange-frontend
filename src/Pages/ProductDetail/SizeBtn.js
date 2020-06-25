import React from "react";
import "./ProductDetail.scss";

class SizeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 0,
    };
  }
  btnClickHandler = (e) => {
    console.log("target name :", e.target.name);
    console.log("name :", this.props.size);
    if (!this.props.soldout) {
      this.setState({
        isActive: e.target.name,
      });
    }
  };
  btnColorHandler = (size) => {
    console.log("test!!!");
    // this.state.isActive === size ? "size_btn" : "size_btn_click";
  };
  render() {
    const { size, soldout } = this.props;
    // let bgColor = this.state.click ? "#111" : "",
    //   fontColor = this.state.click ? "white" : "";
    return (
      <button
        name={size}
        className={
          soldout
            ? "soldout_btn main-font p-r"
            : this.state.isActive === size
            ? "size_btn_click"
            : "size_btn"
        }
        onClick={this.btnClickHandler}
      >
        {size}
      </button>
    );
  }
}

export default SizeBtn;
