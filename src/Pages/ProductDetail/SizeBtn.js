import React from "react";
import "./ProductDetail.scss";

class SizeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }
  btnClickHandler = () => {
    if (!this.props.soldout) {
      this.setState({
        click: !this.state.click,
      });
    }
  };
  render() {
    const { size, soldout } = this.props;
    let bgColor = this.state.click ? "#111" : "",
      fontColor = this.state.click ? "white" : "";
    return (
      <button
        style={{ backgroundColor: bgColor, color: fontColor }}
        className={soldout ? "soldout_btn main-font p-r" : "size_btn main-font"}
        onClick={this.btnClickHandler}
      >
        <p>{size}</p>
      </button>
    );
  }
}

export default SizeBtn;
