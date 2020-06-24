import React from "react";
import "./ProductDetail.scss";

class SizeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }
  render() {
    const { size, soldout } = this.props;
    let bgColor = this.state.click ? "#111" : "white",
      fontColor = this.state.click ? "white" : "#111";
    return (
      <button
        style={{}}
        className={soldout ? "soldout_btn main-font p-r" : "size_btn main-font"}
        onClick
      >
        <p>{size}</p>
      </button>
    );
  }
}

export default SizeBtn;
